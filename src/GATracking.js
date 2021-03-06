import { useEffect, useState } from "react";
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

function GATracking() {
    //const location = useLocation();
        //if (window.location.href.includes("lucasburgess")) {
            ReactGA.initialize("UA-206607078-1", { testMode: process.env.NODE_ENV === 'test' });
//https://tacomanator.medium.com/environments-with-create-react-app-7b645312c09d
//The value of NODE_ENV is set automatically to development (when using npm start), test (when using npm test) or production (when using npm build).
        //}
            ReactGA.pageview(window.location.pathname + window.location.search);
        //}
}

export default GATracking;
