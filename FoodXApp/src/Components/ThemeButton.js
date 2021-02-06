import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import FDColors from "../Utils/FDColors";

function ThemeButton(props) {
    return (
        <TouchableOpacity
            style={[style.container, props.style]}
            onPress={props.onPress}
        >
            <Text style={style.textStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        width: '50%', backgroundColor: FDColors.primary, alignItems: 'center', justifyContent: 'center', borderRadius: 10
    },
    textStyle:{
        marginHorizontal: 20, marginVertical: 10, fontSize: widthPercentageToDP("4%")
    }
})

export default ThemeButton;