import { createStore } from "redux";
import matrixReducer from "../reducers/matrixReducer";

const store = createStore(matrixReducer);

export default store;