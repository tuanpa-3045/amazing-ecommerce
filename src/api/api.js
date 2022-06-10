import axios from "axios";
import { GET_CATEGORY, GET_PRODUCT } from "./constant.js";

export const getProducts = async (params) => {
  return await axios.get(`${GET_PRODUCT}`, {
    params,
  });
};

export const getCategories = async () => {
  return await axios.get(`${GET_CATEGORY}`);
};
