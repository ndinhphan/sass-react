import { itemWatcher } from "./sagas/itemSaga";
import { categoryWatcher } from "./sagas/categorySaga";
import { all } from "@redux-saga/core/effects";
export default function* rootSaga() {
  yield all([itemWatcher(), categoryWatcher()]);
}
