import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from '../features/authSlice';
import countReducer from '../features/countSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    count: countReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;