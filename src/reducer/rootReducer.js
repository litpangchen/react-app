import {combineReducers} from "redux";
import user from "../reducer/user";
import todos from "../reducer/todos";
import visibilityFilter from "../reducer/visibilityFilter";
import {selectedSubreddit, postsBySubreddit} from "../reducer/reddit";
import {localeReducer as locale} from "react-localize-redux";

export default combineReducers({
    user,
    todos,
    visibilityFilter,
    postsBySubreddit,
    selectedSubreddit,
    locale
});