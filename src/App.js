// ! import dependencies
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
        <Route path="/write">
          <Write />
        </Route>
        {/* path to a single post id */}
        <Route path="/post/:postId">
          <SinglePost />
        </Route>
        {/* path defined for settings comp */}
        <Route path="/settings">
          <Settings />
        </Route>
        {/* path defined for login comp */}
        <Route path="/login">
          <Login />
        </Route>
        {/* path defined for register comp */}
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
