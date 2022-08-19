import UserReducer from "./UserReducer.js";
const { combineReducers } = require("redux");
const rootReducer = combineReducers({
  UserReducer,
});

export default rootReducer;
