import { put, takeEvery } from "redux-saga/effects";

import {
  GET_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
} from "../constant";
import { getProducts } from "../../api/api";

function* getProductSaga(action) {
  try {
    const startTime = new Date().getTime();

    const { data } = yield getProducts(action.payload);

    const endTime = new Date().getTime();

    data.timeLoading = endTime - startTime;

    yield put({
      type: GET_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_PRODUCT_FAIL,
      payload: error,
    });
  }
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT, getProductSaga);
}
