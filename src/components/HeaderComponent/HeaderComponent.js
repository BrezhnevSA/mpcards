import React, { Component } from 'react';
import { connect }          from "react-redux";
import { 
    Navbar, 
    Button,
    Form
}                           from 'react-bootstrap';
import { Link }             from 'react-router-dom';
import LocalizedStrings     from 'react-localization';

import './HeaderComponent.css';

import { saveFiles }    from '../../_actions/FileActions';
import LanguageSelector from '../LanguageSelectorComponent/LanguageSelectorComponent';

let strings = new LocalizedStrings({
    en:{
        load: "Load",
        hide: "Hide",
        show_randomly: "Show randomly",
        reset: "Reset",
        login: "Login"
    },
    ru: {
        load: "Загрузить",
        hide: "Скрыть",
        show_randomly: "Показать случайно",
        reset: "Сбросить",
        login: "Войти"
    }
});

const mapStateToProps = state => {
    return {
        files: state.files,
        language: state.language
    };
};

const mapDispatchToProps = {
    saveFiles,
}

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employee: this.props.employee,
            hideCards: false
        };
        strings.setLanguage(this.props.language.toLowerCase());
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.employee !== nextProps.employee) {
            this.setState({
                employee: nextProps.employee
            })
        }
    }

    logout(e) {
        this.props.accessTokenUpdate('','');
        this.setState({ 
            employee: null
        });
    }

    fileSelectedHandler = (e) => {
        let files = [];
        for(let i = 0; i < e.target.files.length; i++) {
            files.push({
                id: i,
                path: URL.createObjectURL(e.target.files[i]),
                show: false,
                hide: false,
                rotate: 0,
                scale: 1
            });
        }
        this.props.saveFiles(files)
    }

    showFile(files) {
        let img_shows = false;
        let img_showed = 0;
        const min = 0;
        const max = files.files.length - 1;
        let files_updated = files.files;
        files.files.map((item, index) => { if (item.show) { img_showed++; } }) 
        img_shows = img_showed === (max + 1);
        while (!img_shows) {
            const rand = Math.round(min + Math.random() * (max - min));
            console.log(rand)
            files_updated = files.files.map((item, index) => {
                if (index === rand && !item.show) {
                    img_shows = true;
                    return {
                        id: item.id,
                        path: item.path,
                        show: true,
                        hide: item.hide,
                        rotate: item.rotate,
                        scale: item.scale
                    };
                } else { return item; }
            })
        }
        this.props.saveFiles(files_updated)
    }

    reset(files) {
        let files_updated = files.files;
        files_updated = files.files.map((item, index) => {
            return {
                    id: item.id,
                    path: item.path,
                    show: false,
                    hide: item.hide,
                    rotate: item.rotate,
                    scale: item.scale
                };
        })
        this.props.saveFiles(files_updated)
    }

    triggerInputFile = () => this.fileInput.click()

    handleHideCards(files) {
        let files_updated = files.files;
        if (files_updated.length > 0) {
            let { hideCards } = this.state;
            files_updated = files.files.map((item, index) => {
                return {
                        id: item.id,
                        path: item.path,
                        show: item.show,
                        hide: !hideCards,
                        rotate: item.rotate,
                        scale: item.scale
                    };
            })
            this.setState({ hideCards : !hideCards })
            this.props.saveFiles(files_updated)
        }
    }

    render() {
        const { employee, files } = this.props; 
        const { hideCards } = this.state;
        strings.setLanguage(this.props.language.toLowerCase());
        return (
            <div>
                <Navbar 
                    bg="light" 
                    expand="md" 
                >
                    <div className="col-1">
                        <Navbar.Brand href="/">
                            <span>mpcards</span>
                        </Navbar.Brand>
                    </div>
                    <div className="col-5">
                        <input 
                            type="file" 
                            ref={fileInput => this.fileInput = fileInput} 
                            multiple 
                            onChange={this.fileSelectedHandler} 
                            style={{ display: 'none' }}
                        />
                        <Button 
                            onClick={this.triggerInputFile} 
                            className="nav_buttons"
                        >
                            {strings.load}
                        </Button>
                        <i 
                            className={`
                                fa 
                                fa-${ hideCards ? 'check-square-o' : 'square-o' } 
                                ${ files.files.length > 0 ? '' : 'disabled_checkbox' }
                                nav_buttons
                            `} 
                            aria-hidden="true"
                            onClick={(e) => this.handleHideCards(files)}
                        ></i>
                        <Form.Label className={`nav_buttons ${ files.files.length > 0 ? '' : 'disabled_checkbox' }`}>
                            {strings.hide}
                        </Form.Label>
                        <Button
                            color="secondary"
                            className="nav_buttons"
                            onClick={ (e) => {this.showFile(files)} }
                            disabled={ files.files.length === 0 }
                        >
                            {strings.show_randomly}
                        </Button>
                        <Button
                            color="secondary"
                            className="nav_buttons"
                            onClick={ (e) => {this.reset(files)} }
                            disabled={ files.files.length === 0 }
                        >
                            {strings.reset}
                        </Button>
                    </div>
                    <div className="col-4">
                    </div>
                    <div className="col-5">
                        <LanguageSelector/>
                        { employee ? ( 
                            <Button
                                color="secondary"
                                className="login_button nav_buttons"
                                onClick={ (e) => this.logout(e) }
                            >
                                Logout
                            </Button>
                        ) : ( 
                            <Button className="nav_buttons">
                                <Link to="/login"
                                    color="secondary"
                                    className="login_button"
                                >
                                    {strings.login}
                                </Link>
                            </Button>
                        )}
                        
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Header);