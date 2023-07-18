import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/countSlice";
import countryReducer from "../features/country/countrySlice";
import siteReducer from "../features/ThemeAndLang/site";

import todoReducer from "../features/TodoList/todoList";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        country: countryReducer,
        site: siteReducer,
        todos : todoReducer
    },
});