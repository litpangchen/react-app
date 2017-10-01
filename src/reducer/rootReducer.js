import {combineReducers} from "redux";
import user from "../reducer/user";
import { localeReducer as locale } from 'react-localize-redux';

export default combineReducers({
    user,
    locale
});