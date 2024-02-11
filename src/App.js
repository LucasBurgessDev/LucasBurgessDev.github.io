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

// Import the GA4 library (gtag.js)
import { GA_MEASUREMENT_ID } from './config'; // Assuming you have your Measurement ID in a separate config file

function App() {
  // Initialize GA4
  useEffect(() => {
    // Check if the environment is 'test' and return if true
    if (process.env.NODE_ENV === 'test') {
      return;
    }

    // Initialize GA4 with your Measurement ID
    window.gtag('config', GA_MEASUREMENT_ID);
  }, []);

  // Send pageview events on route change
  const trackPageview = () => {
    const location = useLocation();
    useEffect(() => {
      // Send pageview event on route change
      // Check if the environment is 'test' and return if true
      if (process.env.NODE_ENV === 'test') {
        return;
      }

      window.gtag('config', GA_MEASUREMENT_ID, {
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