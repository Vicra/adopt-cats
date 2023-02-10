import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";

import Home from "./Components/Home";

import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import PetDetails from "./Components/Pages/PetDetails";
import GiveInAdoption from "./Components/Pages/GiveInAdoption";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";

export default function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/pet-details">
                        <PetDetails />
                    </Route>
                    <Route path="/give-in">
                        <GiveInAdoption />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}
