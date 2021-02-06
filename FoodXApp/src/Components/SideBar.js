import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react'
import { clearUserLoginStatus } from "../Utils/AsyncStorageHelper";

function onLogOut(props) {
    clearUserLoginStatus(() => {
        props.navigation.reset({
            index: 0,
            routes: [{ name: 'SplashContainer' }],
        });
    }, () => { })

}
function SideBar(props) {
    return (
        <View style={style.container}>
            <View style={{ height: 100 }} />
            <TouchableOpacity onPress={() => onLogOut(props)}>
                <Text>{"LogOut"}</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default SideBar;