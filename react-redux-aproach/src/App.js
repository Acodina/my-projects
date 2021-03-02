import logo from "./logo.svg";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { StylesProvider } from "@material-ui/core";

import "./Styles/App.css";
import "./Styles/main.scss";

import Nav from "./Commons/Navbar";
import NotFound from "./Commons/NotFound";

import Form from "./Components/Form";
import Home from "./Containers/Home";
import Profile from "./Components/Profile";

function App() {
  return (
    <StylesProvider injectFirst>
      <div className="app">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
            <Route path="/profile" component={Profile} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </StylesProvider>
  );
}

export default App;
