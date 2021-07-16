import { ITEM_INIT_SUCCESS } from "../sagas/itemSaga";

const initialState = {
  items: {
    highlight: [],
    new: [],
    comingsoon: [],
  },
};

export const itemReducer = (state = initialState, action) => {
  console.log("state now: ", state);
  console.log("action", action);
  switch (action.type) {
    case ITEM_INIT_SUCCESS:
      console.log("action", action);
      return { ...state, items: action.data.items };
    default:
      return state;
  }
};
