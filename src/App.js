import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security, SecureRoute } from '@okta/okta-react';
import SigninWidget from './components/auth/SigninWidget';
import ListUsers from './components/pages/ListUsers';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-02895690.okta.com/oauth2/default',
  clientId: '0oa5r1v629sOHufgm5d7',
  redirectUri: window.location.origin + '/login/callback'
});

class App extends Component {

  constructor(props) {
    super(props);
    this.restoreOriginalUri = async (_oktaAuth, originalUri) => {
      props.history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
    };
  }

  render() {
    return (
      <Security oktaAuth={oktaAuth} restoreOriginalUri={this.restoreOriginalUri}>
        <Route path="/" exact={true} component={SigninWidget}/>
        <Route path="/login/callback" component={LoginCallback}/>
        <SecureRoute path="/userList" component={ListUsers}/> 
      </Security>
    );
  }
}

const AppWithRouterAccess = withRouter(App);

class RouterApp extends Component {
  render() {
    return (<Router><AppWithRouterAccess/></Router>);
  }
}

export default RouterApp;
