import React from 'react';
import './App.css';
import NavBar from './components/common/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import ContactMe from "./components/pages/ContactMe";
import Blog from "./components/pages/Blog";
import BlogPostPage from "./components/pages/BlogPostPage"; 

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/contactme" exact component={ContactMe} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" exact component={BlogPostPage} />
          {/* <Route path="/404" component={Error} /> */}
          <Redirect to="/404" component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;