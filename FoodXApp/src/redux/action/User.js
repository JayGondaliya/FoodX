
export const TYPE_SAVE_LOGIN_STATUS = "TYPE_SAVE_LOGIN_STATUS"
export function saveUserLoginStatusInRedux(details) {
    return {
        type: TYPE_SAVE_LOGIN_STATUS,
        value: details
    }
}
