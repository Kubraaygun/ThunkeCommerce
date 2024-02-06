import { ActionTypes } from "../actionTypes";
const initialState = {
  isLoading: false,
  isErr: false,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_BASKET_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.SET_BASKET_ERROR:
      return { ...state, isLoading: false, isError: action.payload };

    case ActionTypes.SET_BASKET:
      return {
        ...state,
        isLoading: false,
        isError: false,
        basket: action.payload,
      };

    case ActionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: state.basket.concat(action.payload),
      };

    case ActionTypes.UPDATE_ITEM:
      const newBasket = state.basket.map((i) =>
        i.id === action.payload ? { ...i, amount: i.amount + 1 } : i
      );

      return { ...state, basket: newBasket };

    case ActionTypes.REMOVE_ITEM:
      const updateBasket = state.basket.filter((i) => i.id !== action.payload);

      return { ...state, basket: updateBasket };

    default:
      return state;
  }
};

export default basketReducer;
