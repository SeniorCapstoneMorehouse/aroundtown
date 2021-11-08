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
            <img class="sign-in-logo" src={logo}/>
        </header>
        <AmplifySignOut />
        <div class="textstuff">
            This will change things.
        </div>
    </div>
);

export default withAuthenticator(App);
