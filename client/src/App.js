

// ! import dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// * import components and files
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Home from "./pages/Home/Home";
import SinglePost from "./pages/SinglePost/SinglePost";
import Write from "./pages/Write/Write";

function App() {
  // define a pseudo user
  const user = true;
  return (
    // ! Wrap the entire container under Router to enable routing to each and every component
    <Router>
      <Navbar />
      {/* Switch tag is used to "switch" between different components/pages */}
      <Switch>
        {/* Route tag defines the url path that will be triggered and the component that will be rendered */}
        {/* path defined for home page */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* path defined to write component */}
        {/* if user detected render the home page else redirect them to register screen */}
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        {/* path to a single post id */}
        <Route path="/post/:postId">
          <SinglePost />
        </Route>
        {/* path defined for settings comp */}
        {/* if user detected render the settings page else redirect them to the register screen */}
        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
        {/* path defined for login comp */}
        {/* if user is detected render the home page else redirect them to the login screen/*/}
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        {/* path defined for register comp */}
        {/* if user is detecte render the home page else redirect them to the register screen */}
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
