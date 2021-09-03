import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import ContactMe from "./components/pages/ContactMe";
//import GATracking from './GATracking';
import ReactGA from 'react-ga';

function App() {
  GATracking();
  return (
    <>
      <Router>
        <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/resume' exact component={Resume} />
            <Route path='/contactme' exact component={ContactMe} />
            <Route path="/404" component={ Error } />
            <Redirect to="/404" />
          </Switch>
      </Router>
    </>
  );
}

export default App;

function GATracking() {
  ReactGA.initialize("G-44YREV2G8B");
  ReactGA.pageview(window.location.pathname);
}