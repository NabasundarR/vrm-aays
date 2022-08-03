import React, { Component } from "react";
import { withOktaAuth } from "@okta/okta-react";
import "../../App.css";
import "../../css/Style.css"
import "../../css/Login.css"
import logo from "../../img/Mars_icon_white.png";
import Home from '../pages/Homepage';

export default withOktaAuth(
  class SigninWidget extends Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
    }

    async login() {
      await this.props.oktaAuth.signInWithRedirect();
    }

    async logout() {
      await this.props.oktaAuth.signOut();
    }

    render() {
      let body = null;
      if (this.props.authState?.isAuthenticated) {
        body = (
          <div className="Buttons">
            <Home/>
          </div>
        );
      } else {
        body = (
          <div className="Buttons">
            <div className="loginPage">
              <div className="login_body_content">
                <div className="bg-white dark:bg-gray-900 bgColor">
                  <div className="login_body_grid">
                    <div className="hidden bg-cover lg:block lg:w-2/3 bgImageClass">
                      <div className="login_info">
                        <div>
                          <h2 className="text-4xl font-bold text-white">
                            Group Community
                          </h2>

                          <p className="left_grid_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. In autem ipsa, nulla laboriosam dolores,
                            repellendus perferendis libero suscipit nam
                            temporibus molestiae
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="right_grid_align bgColor">
                      <div className="flex-1">
                        <div className="text-center">
                          <span className="text-4xl font-bold text-center text-gray-700 dark:text-white MarsLogo">
                            <img width={100} src={logo} alt="img" />
                          </span>

                          <p className="left_grid_text left_margin">
                            Sign in to access your account
                          </p>
                        </div>

                        <div className="mt-8">
                          <div className="mt-6">
                            <button
                              className="btn_login"
                              onClick={this.login}>
                              Sign in
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      return <div className="App">{body}</div>;
    }
  }
);
