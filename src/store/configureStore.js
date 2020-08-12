import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";
import error from "./middleware/error";
export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api, error],
  });
}
