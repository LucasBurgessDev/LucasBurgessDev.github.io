import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/common/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import ContactMe from "./components/pages/ContactMe";
import Blog from "./components/pages/Blog";
import BlogPostPage from "./components/pages/BlogPostPage"; 
import Footer from "./components/common/Footer";

function App() {
  // Initialize GA4
  useEffect(() => {
    // Replace 'YOUR_MEASUREMENT_ID' with your actual Measurement ID
    window.gtag('config', 'YOUR_MEASUREMENT_ID');
  }, []);

  // Send pageview events on route change
  const trackPageview = () => {
    const location = useLocation();
    useEffect(() => {
      // Send pageview event on route change
      window.gtag('config', 'YOUR_MEASUREMENT_ID', {
        page_path: location.pathname,
      });
    }, [location]);
  };

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={() => { trackPageview(); return <Home />; }} />
          <Route path="/projects" exact component={() => { trackPageview(); return <Projects />; }} />
          <Route path="/resume" exact component={() => { trackPageview(); return <Resume />; }} />
          <Route path="/contactme" exact component={() => { trackPageview(); return <ContactMe />; }} />
          <Route path="/blog" exact component={() => { trackPageview(); return <Blog />; }} />
          <Route path="/blog/:id" exact component={() => { trackPageview(); return <BlogPostPage />; }} />
          {/* <Route path="/404" component={Error} /> */}
          <Redirect to="/404" component={Error} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;