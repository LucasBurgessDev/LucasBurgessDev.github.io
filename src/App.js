import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/common/NavBar";
import {
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import ContactMe from "./components/pages/ContactMe";
import Blog from "./components/pages/Blog";
import BlogPostPage from "./components/pages/BlogPostPage";
import Footer from "./components/common/Footer";

 // Import the GA4 library (gtag.js)
const GA_MEASUREMENT_ID = "G-DSTGL7K9W7";

// Custom hook for tracking page views
 function usePageViews() {
   const location = useLocation();
   console.log(location);

   useEffect(() => {
     if (typeof window !== "undefined" && process.env.NODE_ENV !== "test") {
       window.gtag("config", GA_MEASUREMENT_ID, {
         page_path: location.pathname,
       });
       console.log(location.pathname);
     }
   }, [location]);

   return null;
 }

function App() {
  // Call the custom hook to track page views
  usePageViews();
   
  return (
    <>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/contactme" exact component={ContactMe} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" exact component={BlogPostPage} />
          <Redirect to="/404" component={Error} />
        </Switch>
        <Footer />
    </>
  );
}

export default App;
