import React from "react";

import { Container } from "semantic-ui-react";
import "../assets/css/App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Navi from "./Navi";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import JobAdvertisementCreate from "./JobAdvertisementCreate";
import Footer from "./Footer";

import JobAdvertisementView from "../components/layouts/JobAdvertisementLayout/JobAdvertisementView";

import { ToastContainer } from "react-toastify"

import Account from "./Account";
import Profile from "./Profile";

//document.body.style.zoom = "75%"

require('dotenv').config()
console.log(process.env)

export default function App() {


  return (
    <Router>
      <div className="App">
        <ToastContainer
        style={{ position:"fixed" }}
          position="top-left"
          autoClose={2500}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
          draggable
        />
        <Navi />
        <Container className="main">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/dashboard"><Dashboard /></Route>
            <Route exact path="/account"><Account /></Route>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/register"><Register /></Route>

            <Route exact path="/jobAdvertisement/create"><JobAdvertisementCreate /></Route>
            <Route exact path="/jobAdvertisement/:id" component={JobAdvertisementView} />

            <Route exact path="/profile/:userId" component={Profile} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}
