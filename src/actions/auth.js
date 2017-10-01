import {USER_LOGGED_IN, USER_LOGGED_OUT} from "../types/types";
import api from "../api/authAPI";

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const login = credentials => dispatch => (
    api.user.login(credentials).then(user=> {
        window.localStorage.bookwormJWT = user.token;
        dispatch(userLoggedIn(user))
    })
);

export const logout = () => dispatch=> {
    window.localStorage.removeItem("bookwormJWT");
    let jwtToken = window.localStorage.getItem("bookwormJWT");
    dispatch(userLoggedOut());
};