import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import ContactMe from "./components/pages/ContactMe";
import ReactGA from 'react-ga';
import auth from './auth.ts'; // Sample authentication provider

const trackingId = "G-44YREV2G8B"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})

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
          </Switch>
      </Router>
    </>
  );
}

export default App;
