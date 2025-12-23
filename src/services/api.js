import axios from 'axios';

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? "https://get-blog-info-7hptrwqgna-nw.a.run.app" 
  : "";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getBlogInfo = async (blogId = null) => {
  try {
    const url = blogId ? `/get_blog_info?blog_id=${blogId}` : '/get_blog_info';
    // console.log("API Request URL:", url);
    const response = await apiClient.get(url);
    console.log("API Response Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog info:", error);
    throw error;
  }
};

export default apiClient;
