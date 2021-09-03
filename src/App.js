import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import ContactMe from "./components/pages/ContactMe";

function App() {
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
