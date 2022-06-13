import axios from "axios";
import { GET_CATEGORY, GET_PRODUCT } from "./constant.js";

export const getProducts = (params) => {
  return axios.get(`${GET_PRODUCT}`, {
    params,
  });
};

export const fetchCategories = () => {
  return axios.get(`${GET_CATEGORY}`);
};
