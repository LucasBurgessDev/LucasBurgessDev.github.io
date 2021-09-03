import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from 'react-ga';
//import auth from './auth.ts'; // Sample authentication provider

/* ReactGA.set({
  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})
 */

/* function GATracking() {
    let location = useLocation();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
        ReactGA.initialize("G-44YREV2G8B");
        }
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
        ReactGA.pageview(location.pathname + location.search);
        }
    }, [initialized, location]);
}

export default GATracking; */

function GATracking() {
        let location = useLocation();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
    ReactGA.initialize("UA-206607078-1", { testMode: process.env.NODE_ENV === 'test' });
            }
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
        ReactGA.pageview(location.pathname + location.search);
        }
    }, [initialized, location]);
}

export default GATracking;