

import React, { Component } from 'react';
import { connect }          from "react-redux";
import { toast }            from 'react-toastify';
import LocalizedStrings     from 'react-localization';

import { saveFiles } from '../../_actions/FileActions';

// import { addCardTemplate } from '../../_services/CardsTemplatesService';
import './CardsTemplatesComponent.css';

let strings = new LocalizedStrings({
    en:{
        pleaseselect: "Please select files firstly"
    },
    ru: {
        pleaseselect: "Пожалуйста, сначала выберите файлы"
    }
});

const mapDispatchToProps = {
    saveFiles,
}

const mapStateToProps = state => {
    return {
        users:          state.users,
        cardstemplates: state.cardstemplates,
        files:          state.files,
        language:       state.language
    };
};

class CardsTemplates extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: this.props.users.items,
            files: this.props.files
        }

        strings.setLanguage(this.props.language.toLowerCase());
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            users: nextProps.users.items,
        })
    }

    notify = () => {
        toast.success("Great", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    handleClickOnCard(files, id) {
        let files_updated = files;
        if (files_updated.length > 0) {
            let { hideCards } = this.state;
            files_updated = files.map((item, index) => {
                if (item.id === id) {
                    return {
                        id:     item.id,
                        path:   item.path,
                        show:   item.show,
                        hide:   !item.hide,
                        rotate: item.rotate,
                        scale:  item.scale
                    };
                } else { return item; }
            })
            this.setState({ hideCards : !hideCards })
            this.props.saveFiles(files_updated)
        }
    }

    render() {
        let {users, cardstemplates, files}   = this.props;
        strings.setLanguage(this.props.language.toLowerCase());
        console.log(files)
        if ((!cardstemplates.items && cardstemplates.isFetching)
            || (!users.items && users.isFetching)) {
            return(<><div className="loader">Loading...</div></>)
        } else if (files.files.length <= 0) {
            return(
                <>
                    <div style={{ height: window.innerHeight / 3 }}></div>
                    <div className="tip_first">{strings.pleaseselect}</div>
                </>
            )
        } else {
            let files_filtered = files.files.filter(item => item.show);
            return (
                <>                    
                    { files_filtered.map(p => {
                            return <img 
                                key={p.id} 
                                src={p.hide ? "hidden.png" : p.path} 
                                alt="can't show image" 
                                className="p_cards" 
                                onClick={(e) => { this.handleClickOnCard(files.files, p.id)}}
                            />;
                    })}
                    { files_filtered.length === 0 ? (
                        <img src="noimages.png"></img>
                    ) : (
                        <></>
                    )}
                </>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(CardsTemplates);