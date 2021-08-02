import { ITEM_GET_SUCCESS } from "../sagas/itemSaga";

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
    case ITEM_GET_SUCCESS:
      // console.log("return data from item get: ", { ...state, ...action.data });
      const {
        new: newItems,
        highlight: highlightItems,
        comingsoon: comingsoonItems,
      } = action.data;

      // console.log(newItems, highlightItems, comingsoonItems);

      // let newState = { ...state };
      // if (newItems) newState.items.new = newItems;
      // if (highlightItems) newState.items.highlight = highlightItems;
      // if (comingsoonItems) newState.items.comingsoon = comingsoonItems;

      const items = {
        new: newItems ? newItems : state.items.new,
        highlight: highlightItems ? highlightItems : state.items.highlight,
        comingsoon: comingsoonItems ? comingsoonItems : state.items.comingsoon,
      };
      const newState = { items };
      console.log("newstate:", newState);
      return newState;
    default:
      return state;
  }
};
