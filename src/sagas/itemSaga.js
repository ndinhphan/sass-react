import itemServices from "../service/itemServices";
import { put, takeLatest, takeEvery, all } from "@redux-saga/core/effects";
import { ITEM_GET, ITEM_GET_HIGHLIGHT } from "../action/itemActions";
export const ITEM_INIT_SUCCESS = "ITEM_INIT_SUCCESS";
export const ITEM_GET_SUCCESS = "ITEM_GET_SUCCESS";

function* itemGet(action) {
  const { params, type } = action.data;
  console.log("get items");
  const response = yield itemServices.getItems(params);
  const items = response.data.data.records;
  console.log("items from saga", items, "of type", type);
  yield put({ type: ITEM_GET_SUCCESS, data: { [type]: items } });
}

function* itemGetHighlight(action) {
  const { params } = action.data;
  console.log("get highlight items");
  const response = yield itemServices.getHighlight(params);
  const items = response.data.data.records;
  console.log("highlight items from saga", items);
  yield put({
    type: ITEM_GET_SUCCESS,
    data: {
      highlight: items,
    },
  });
}

function* itemGetWatcher() {
  yield takeEvery(ITEM_GET, itemGet);
}

function* itemGetHighlightWatcher() {
  yield takeLatest(ITEM_GET_HIGHLIGHT, itemGetHighlight);
}

export function* itemWatcher() {
  yield all([itemGetWatcher(), itemGetHighlightWatcher()]);
}
