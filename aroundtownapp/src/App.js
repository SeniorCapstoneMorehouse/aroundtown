//import React from "react";
// APP JS with more HOMEPAGE CSS DESIGN
import React, { useState, useEffect, useRef } from "react";
//import { useEffect, useRef } from "react";
//import ReactMapGL, { NavigationControl } from "react-map-gl";
import logo from "./resources/around-town-logo.png";
import mappic from "./resources/map.jpeg";
import NearBy from "./resources/karlout.regular.Near.png";
import amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import "./App.css";
//import "./login.js";
import Map from "./Map.js";
import {
    withAuthenticator,
    AmplifySignOut,
    AmplifySignIn,
    AmplifyAuthenticator,
} from "@aws-amplify/ui-react";
import "maplibre-gl/dist/maplibre-gl.css";
import { createMap } from "maplibre-gl-js-amplify";
import "bootstrap/dist/css/bootstrap.min.css";
//import { drawPoints } from "maplibre-gl-js-amplify";
import { Geo } from "aws-amplify";
amplify.configure(awsconfig);

//* ---- CONSTANTS ----- */

const INITIAL_VIEWPORT = {
    longitude: -56.164532,
    latitude: -34.901112,
};

function App() {
    const [map, setMap] = useState();
    useEffect(() => {
        const initializeMap = async () => {
            const map = await createMap({
                container: "map", // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js-docs/api/map/
                center: [INITIAL_VIEWPORT.longitude, INITIAL_VIEWPORT.latitude],
                zoom: 13,
            });
            //map.addControl(createAmplifyGeocoder());

            setMap(map);
            //const stores = getStores();
            //addStoreLocations(map, stores);
        };

        initializeMap();

        return function cleanup() {
            console.log("remove");
            map.remove();
        };
    }, []);

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
                            <a href="https://sluttyveganatl.com/" target="_blank" >Slutty Vegan</a>
                        </li>
                        <li>
                            <a href="https://www.a-ma-maniere.com/" target="_blank" >A Ma Maniere</a>
                        </li>
                        <li>
                            <a href="https://thisisitbbq.com/" target="_blank" >This Is It!</a>
                        </li>
                        <li>
                            <a href="https://www.pureatlanta.com/" target="_blank" >Pure Atlanta</a>
                        </li>
                    </ul>
                    <img className="map" src={mappic} alt="near by map" width="300" />
                </div>
                <div className="logout">
                    <AmplifySignOut />
                </div>
                <Map myMap={map} />
            </AmplifyAuthenticator>
        </div>
    );
}

export default App;