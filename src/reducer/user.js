import {USER_LOGGED_IN, USER_LOGGED_OUT} from "../types/types";

const initialState = {
    user: {
        token: "sasa",
        email: "clpcrazyboy@hotmail.com"
    }
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case USER_LOGGED_IN :
        {
            return action.user;
        }
        case USER_LOGGED_OUT:
        {
            return {};
        }
        default :
        {
            return state;
        }
    }
}