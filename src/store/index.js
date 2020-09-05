
import {applyMiddleware, combineReducers, createStore} from "redux";

import ReduxThunk from "redux-thunk";
import home from "../slice/homeslice";
import storage from "redux-persist/lib/storage";
import {persistReducer}  from "redux-persist";
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["home"]
};


const middleware = () => {
    return applyMiddleware(ReduxThunk);
   
  };
  const pReducer =persistReducer(
    persistConfig,
    combineReducers({
   home}));

export default createStore(pReducer,middleware());