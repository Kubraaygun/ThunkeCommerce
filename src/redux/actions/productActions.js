import axios from "axios";
import { ActionTypes } from "../actionTypes";

export const setLoading = () => ({
  type: ActionTypes.SET_LOADING,
});

export const setError = (payload) => ({
  type: ActionTypes.SET_ERROR,
  payload,
});

export const setProducts = (payload) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload,
});

export const getProducts = () => (dispatch) => {
  dispatch(setLoading());

  axios
    .get("http://localhost:3050/products")
    .then((res) => dispatch(setProducts(res.data)))
    .catch((err) => dispatch(setError(err)));
};

function ornekFonksiyon() {
  return async function (dispatch) {
    const data = await axios.get("...");
    dispatch({ type: "SET_VERI" });
  };
}

const ornekFonk = () => async (dispatch) => {
  const data = await axios.get("...");
  dispatch({ type: "SET_VERI" });
};
