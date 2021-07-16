import itemServices from "../service/itemServices";
import { put, takeLatest, all } from "@redux-saga/core/effects";
import { ITEM_INIT } from "../action/itemActions";
export const ITEM_INIT_SUCCESS = "ITEM_INIT_SUCCESS";
function* itemInitialize() {
  // console.log("init items");
  const items = yield itemServices.getAll();
  console.log("items from saga", items);
  yield put({ type: ITEM_INIT_SUCCESS, data: items });
}

function* itemInitializeWatcher() {
  yield takeLatest(ITEM_INIT, itemInitialize);
}

export function* itemWatcher() {
  yield all([itemInitializeWatcher()]);
}
