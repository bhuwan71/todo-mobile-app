/* eslint-disable unicorn/filename-case */
import { combineReducers } from '@reduxjs/toolkit';

import apiReducer from './features/apiSlice';

const rootReducer = combineReducers({
  api: apiReducer,
});

export default rootReducer;
