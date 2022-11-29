import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Navbar from "./Components/Common/Navbar";
import Home from "./Components/Home";
// import Cats from "./Components/Cats";
import MyLogin from "./Components/MyLogin/MyLogin";

export default function App(props) {
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
                        <Route path="/login">
                            <MyLogin/>
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