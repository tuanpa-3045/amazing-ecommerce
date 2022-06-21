import {
  GET_PRODUCT,
  SET_PRICE,
  SET_SEARCH_KEY,
  SET_BRAND,
  SET_TYPE,
  SET_SORT,
  SET_PAGINATION,
  SET_RATE,
  SET_CLEAR_FILTER,
  SET_CATEGORY,
} from "../constant";

export function getProduct(params) {
  return {
    type: GET_PRODUCT,
    payload: params,
  };
}

export function setCategory(params) {
  return {
    type: SET_CATEGORY,
    payload: params,
  };
}

export function setPrice(params) {
  return {
    type: SET_PRICE,
    payload: params,
  };
}
export function setSearchKey(params) {
  return {
    type: SET_SEARCH_KEY,
    payload: params,
  };
}
export function setBrand(params) {
  return {
    type: SET_BRAND,
    payload: params,
  };
}

export function setType(params) {
  return {
    type: SET_TYPE,
    payload: params,
  };
}

export function setSortPrice(params) {
  return {
    type: SET_SORT,
    payload: params,
  };
}

export function setCurrentPage(params) {
  return {
    type: SET_PAGINATION,
    payload: params,
  };
}

export function setRate(params) {
  return {
    type: SET_RATE,
    payload: params,
  };
}

export function setClearFilter(params) {
  return {
    type: SET_CLEAR_FILTER,
    payload: params.isClearFilter,
  };
}
