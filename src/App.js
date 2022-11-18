import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Navbar from "./Components/Common/Navbar";
import Home from "./Components/Home";
import axios from "axios";

export default function App() {
    const options = {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/cats',
        params: { name: 'abyssinian' },
        headers: { 'X-Api-Key': '8I5WKinqRnySQO3moxyqbw==zy4om9QVXoSingY4' }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return (
        <div>
            <Navbar />
            <Router>
                <div>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>

                </div>
            </Router>
        </div>

    );
}


function About() {
    return <h2>About</h2>;
}

function Contact() {
    return <h2>Contact</h2>;
}