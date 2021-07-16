import categoryServices from "../service/categoryServices";
import { put, takeLatest, all } from "@redux-saga/core/effects";
import { CATEGORY_INIT } from "../action/categoryActions";
export const CATEGORY_INIT_SUCCESS = "CATEGORY_INIT_SUCCESS";

function* categoryInitialize() {
  console.log("init categories");
  const categories = yield categoryServices.getAll();
  console.log("category in saga", categories);
  yield put({ type: CATEGORY_INIT_SUCCESS, data: categories });
}

function* categoryInitializeWatcher() {
  yield takeLatest(CATEGORY_INIT, categoryInitialize);
}

export function* categoryWatcher() {
  yield all([categoryInitializeWatcher()]);
}
