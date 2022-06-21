import { fork } from "redux-saga/effects";

import productSaga from "./product.saga.js";

export default function* mySaga() {
  yield fork(productSaga);
}
