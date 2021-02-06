import { TYPE_SAVE_LOGIN_STATUS } from "../action/User";

const initialStateUser = {
    isLoggedIn: false
};

export function userLoginStatusOperations(state = initialStateUser, action) {
    switch (action.type) {

        case TYPE_SAVE_LOGIN_STATUS: {
            return Object.assign({}, state, {
                isLoggedIn: action.value
            });
        }
        default:
            return state;
    }
}