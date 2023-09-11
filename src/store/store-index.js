import { configureStore } from "@reduxjs/toolkit";
import sentBoxReducer from './sentbox-slice';
import authReducer from './auth-slice';
import inboxReducer from "./inbox-slice";

const store = configureStore({
    reducer: {auth: authReducer, inbox: inboxReducer, sentbox: sentBoxReducer}

});

export default store;