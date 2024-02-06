import axios from "axios";
import { ActionTypes } from "../actionTypes";

export const getBasket = () => (dispatch) => {
  dispatch({ type: ActionTypes.SET_BASKET_LOADING });
  axios
    .get("http://localhost:3050/basket")
    .then((res) =>
      dispatch({ type: ActionTypes.SET_BASKET, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.SET_BASKET_ERROR, payload: err })
    );
};

export const addToBasket = (product) => (dispatch) => {
  const newProduct = { ...product, amount: 1 };

  delete newProduct.specs;
  delete newProduct.color;
  delete newProduct.title;

  axios.post("http://localhost:3050/basket", newProduct).then(() => {
    dispatch({ type: ActionTypes.ADD_TO_BASKET, payload: newProduct });
  });
};

export const updateItem = (product) => (dispatch) => {
  axios
    .patch(`http://localhost:3050/basket/${product.id}`, {
      amount: product.amount + 1,
    })
    .then(() => {
      //  console.log('deneme')
      dispatch({
        type: ActionTypes.UPDATE_ITEM,
        payload: product.id,
      });
    });
};

export const deleteItem = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:3050/basket/${id}`)

    .then(() => {
      dispatch({
        type: ActionTypes.REMOVE_ITEM,
        payload: id,
      });
    });
};
