import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/common/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";

// Import the GA4 library (gtag.js)
const GA_MEASUREMENT_ID = "G-DSTGL7K9W7";

// Custom hook for tracking page views
function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    // Check if the environment is 'test' and return if true
    if (process.env.NODE_ENV === "test") {
      return;
    }

    // Send pageview event on route change
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: location.pathname,
    });
  }, [location]);
}

function App() {
  // Call the custom hook to track page views
  usePageViews();

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
        <Footer />
      </Router>
    </>
  );
}

export default App;
