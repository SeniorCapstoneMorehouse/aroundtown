import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './App.css';
import logo from './resources/around-town-logo.png'
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);



const App = () => (
    <div>
        <header>
            <img class="sign-in-logo" src={logo} />
        </header>
        <AmplifySignOut />

        <div class="wrapper">
            <div class="container">
                <input type="text" class="input" placeholder="AroundTown" />
                    <input type="button" value="Search" class="close-btn" />
            </div>   
        </div>

        <div class="textstuff">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
            <footer> Where local businesses get national exposure, and great customers receive reputable service! </footer>
    </div>
);

export default withAuthenticator(App);
