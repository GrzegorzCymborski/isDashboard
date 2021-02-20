import { combineReducers } from "redux";
import usersReducer from "./users";
import taskReducer from "./currentTask";

const rootReducer = combineReducers({
  users: usersReducer,
  currentTask: taskReducer,
});

export default rootReducer;
