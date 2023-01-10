import { combineReducers } from "redux";
import authReducer from './authReducer'
import questionsReducer from './questionReducer'
import currentUserReducer from "./currentUserReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    authReducer,questionsReducer,currentUserReducer,usersReducer
});