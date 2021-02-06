import AsyncStorage from '@react-native-community/async-storage';

export function saveUserLoginStatus(details, onSuccess, onFailure) {
    AsyncStorage.setItem("login", JSON.stringify(details)).then(
        success => onSuccess(success),
        err => onFailure(err)
    );
}

export function getUserLoginStatus(onSuccess, onFailure) {
    AsyncStorage.getItem("login").then(
        res => {
            if (res != "" && res != null && res != undefined) {
                onSuccess(JSON.parse(res));
            } else {
                onFailure("Token Null");
            }
        },
        err => onFailure(err)
    );
}

export function clearUserLoginStatus(onSuccess, onError) {
    AsyncStorage.removeItem("login").then(
        response => {
            onSuccess(response);
        },
        error => {
            onError(error);
        }
    );
}