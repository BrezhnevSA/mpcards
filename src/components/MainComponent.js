import React, { Component } from 'react';
import styled               from 'styled-components';
import { BrowserRouter }    from 'react-router-dom';
import { 
    Switch, 
    Route, 
    Redirect 
}                           from 'react-router-dom';

import Header     from './HeaderComponent/HeaderComponent';
import Cardstemplates   from './CardstemplatesComponent/CardsTemplatesComponent.js';
import Login      from './LoginComponent/LoginComponent';

const MainWrapper = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
`;

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };

        this.accessTokenUpdate = this.accessTokenUpdate.bind(this);
    }

    accessTokenUpdate(accessToken, user) {
        localStorage.setItem('accessToken', accessToken); 
        // localStorage.setItem('login', login);   
        this.setState({
            user: user
        });
    }

    render() {
        const { expanded, user } = this.state;
        return (
            <>
                <BrowserRouter>
                    <MainWrapper expanded={expanded} handlerFromParant={this.handleData}>
                        <div className="App">
                            <Header user={user} accessTokenUpdate={this.accessTokenUpdate} />
                            <div id="scrollable-content-wrapper" className="overflow-hidden">
                                <Switch>
                                    <Route path='/login' render={(props) => <Login {...props} accessTokenUpdate={this.accessTokenUpdate}/>}  />
                                    <Route path='/' render={(props) => <Cardstemplates {...props} />}  />
                                    <Redirect to="/" />
                                </Switch>
                            </div>
                        </div>
                    </MainWrapper>
                </BrowserRouter>
            </>
        );
    }

}

export default Main;