import React, { Component } from 'react';
import { connect }          from "react-redux";
import { 
    Form,
    Button
}                           from 'react-bootstrap';
import { 
    Col, 
}                           from 'react-bootstrap';
import { Redirect }         from 'react-router';

// import './HeaderComponent.css';

const mapDispatchToProps = {
}

const mapStateToProps = state => {
    return {
        users: state.users,
    };
};

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: "",
            password: "",
            acceessToken: null,
            user: null
        };
    }

    handleLoginInput(e) {
        this.setState({ login: e.target.value });
    }

    handlePasswordInput(e) {
        this.setState({ password: e.target.value });
    }

    handleLoginButton(e){
        let { login } = this.state;
        let { users } = this.props;
        let user = users.items.find(item => item.email === login);
        if (user !== undefined) {
            this.props.accessTokenUpdate("test", user);
            this.setState({
                acceessToken: "test",
                user: user
            })
        } else {
            alert('Wrong login or password');
        }
    }

    render() {

        if (this.state.user) {
            return(<Redirect to="/adminpanel" />);
        } else if (!this.props.users && this.props.users.isFetching) {
            return(<><div className="loader">Loading...</div></>)
        } else {
            return (
                <>
                    <Form>
                    <Form.Group row style={{ width: '300px', margin: '5px auto 5px auto' }}>
                        <Form.Label for="fieldLastname" sm={4}>Login:</Form.Label>
                        <Col sm={8}>
                            <Form.Input type="text"
                                name="login"
                                id="login"
                                value={this.state.login}
                                onChange={(e) => this.handleLoginInput(e)} />
                        </Col>
                    </Form.Group>
                    <Form.Group row style={{ width: '300px', margin: '5px auto 5px auto' }}>
                        <Form.Label for="fieldLastname" sm={4}>Password:</Form.Label>
                        <Col sm={8}>
                            <Form.Input type="text"
                                name="password"
                                id="password"
                                value={this.state.password}
                                onChange={(e) => this.handlePasswordInput(e)} />
                        </Col>
                    </Form.Group>
                    <Form.Group row style={{ width: '0px', margin: '5px auto 5px auto' }}>
                        <Button onClick={(e) => this.handleLoginButton(e)}>Login</Button>
                    </Form.Group>
                    </Form>
                </>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Login);