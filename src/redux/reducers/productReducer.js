import { ActionTypes } from "../actionTypes";

const initialState = {
  isLoading: false,
  isErr: false,
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.SET_ERROR:
      return { ...state, isLoading: false, isError: action.payload.message };

    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
