import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
