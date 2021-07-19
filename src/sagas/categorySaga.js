import categoryServices from "../service/categoryServices";
import { put, takeLatest, all } from "@redux-saga/core/effects";
import { CATEGORY_GET } from "../action/categoryActions";
export const CATEGORY_INIT_SUCCESS = "CATEGORY_INIT_SUCCESS";
export const CATEGORY_GET_SUCCESS = "CATEGORY_GET_SUCCESS";

function* categoryGet(action) {
  // console.log("get categories");
  // console.log("action in category get", action);
  const params = action.data;
  const response = yield categoryServices.getCategories(params);
  const categories = response.data.data.records;
  // console.log("category in saga", categories);
  yield put({ type: CATEGORY_GET_SUCCESS, data: categories });
}

function* categoryGetWatcher() {
  yield takeLatest(CATEGORY_GET, categoryGet);
}

export function* categoryWatcher() {
  yield all([categoryGetWatcher()]);
}
