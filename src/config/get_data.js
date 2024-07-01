/* export const blogList = [
  {
    id: 1,
    title: "My Blog Page in 2024",
    category: "personal development",
    subCategory: ["growth", "prd"],
    description: "",
    authorName: "Feeling Optimistic",
    authorAvatar: "/images/github.png",
    createdAt: "January 14, 2024",
    cover: "/images/github.png",
  },
] */
import axios from "axios"; // Import axios for making HTTP requests

export const blogList = {
    try {
        const options = {
        headers: { "Content-Type": "application/json" },
        };
        const response = await axios.get(
        "https://user-write-7hptrwqgna-nw.a.run.app",
        {
            first_name: event.target.elements.firstName.value,
        },
        {
            options,
            crossDomain: true,
        }
        );

        console.log("Cloud Function response:", response.data);
        blogList = Array(response.data);
        
    }   catch (error) {
        // Handle errors
        if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server error:", error.response.data);
        } else if (error.request) {
        // The request was made but no response was received
        console.error("Network error:", error.request);
        // Display a generic error message to the user
        alert("Network error. Please try again later.");
        } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Request error:", error.message);
        // Display a generic error message to the user
        alert("An error occurred. Please try again later.");
        }
    }
};