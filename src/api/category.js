import axios from "axios";
import "../axios";

export const createCategory = async (data) => {
  const config = {
    // baseURL: "http://localhost:5000/",
    headers: {
      "Access-Control-Allow-Credentials": true,
    },
  };
  const response = await axios.post("/api/category", data, config);
  return response;
};

export const getCategories = async () => {
  const config = {
    // baseURL: "http://localhost:5000/",
    headers: {
      "Access-Control-Allow-Credentials": true,
    },
  };
  const response = await axios.get("/api/category", config);
  return response;
};
export const getProductByCategory = async (categoryName) => {
  const config = {
    // baseURL: "http://localhost:5000/",
    headers: {
      "Access-Control-Allow-Credentials": true,
    },
  };
  console.log(categoryName);
  const response = await axios.get(`/api/category/${categoryName}`, config);
  return response;
};
