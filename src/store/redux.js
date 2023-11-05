import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";

const store = configureStore({ reducer: { contactSlice: contactReducer } });

export default store;
