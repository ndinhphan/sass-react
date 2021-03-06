import {
  CATEGORY_INIT_SUCCESS,
  CATEGORY_GET_SUCCESS,
} from "../sagas/categorySaga";

const initialState = { categories: [] };

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_INIT_SUCCESS:
      // console.log("category in reducer", action.data);
      return { ...state, categories: action.data };
    case CATEGORY_GET_SUCCESS:
      return { ...state, categories: action.data };
    default:
      return state;
  }
};
