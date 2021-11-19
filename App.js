//import React from "react";
// APP JS with more HOMEPAGE CSS DESIGN
import React, { useState, useEffect } from "react";
//import ReactMapGL, { NavigationControl } from "react-map-gl";
import logo from "./karlout.regular (1).png";
import map from "./map.jpeg";
import NearBy from "./karlout.regular.Near.png";
import "./App.css";
import "./login.js";
import {
  withAuthenticator,
  AmplifySignOut,
  AmplifySignIn,
  AmplifyAuthenticator,
} from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header></header>
      <AmplifyAuthenticator>
        <AmplifySignIn headerText="Sign In" slot="sign-in"></AmplifySignIn>
        <header>
          <img class="logo" src={logo} alt="logo" width="300" />
          <nav>
            <ul class="nav_links">
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="around2.html">Sign up</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </nav>
          <a class="cta" href="around3.html">
            <button>Sign In</button>
          </a>
        </header>
        <div class="wrapper">
          <div class="container">
            <input type="text" class="input" placeholder="AroundTown" />
            <input type="button" value="Search" class="close-btn" />
          </div>
        </div>

        <div class="NearBy">
          <img class="Nearlogo" src={NearBy} alt="Near By" width="300" />
          <ul className="near-by-list">
            <li>
              <a href="https://sluttyveganatl.com/">Slutty Vegan</a>
            </li>
            <li>
              <a href="">A Ma Maniere</a>
            </li>
            <li>
              <a href="">This Is It!</a>
            </li>
            <li>
              <a href="">Pure Atlanta</a>
            </li>
          </ul>
          <img className="map" src={map} alt="near by map" width="300" />
        </div>
        <div className="logout">
          <AmplifySignOut />
        </div>
      </AmplifyAuthenticator>
    </div>
  );
}

export default App;
