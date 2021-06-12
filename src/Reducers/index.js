import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import ideasReducer from "./ideasReducer";

export default combineReducers({
  todosReducer,
  ideasReducer,
});
