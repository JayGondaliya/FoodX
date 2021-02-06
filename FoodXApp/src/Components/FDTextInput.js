import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import FDColors from "../Utils/FDColors";

function FDTextInput(props) {
    return (
        <View style={style.container}>
            <TextInput
                style={style.textInputStyle}
                placeholder={props.placeholder}
                placeholderTextColor={FDColors.buttonUnreserve}
                value={props}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center', alignItems: 'center'
    },
    textInputStyle:{
        width: widthPercentageToDP("80%"), paddingTop:10,fontSize:widthPercentageToDP("4%"), color: FDColors.primary, marginHorizontal: 10, marginTop: 20, borderBottomWidth: 1, borderBottomColor: FDColors.primary
    }
})

export default FDTextInput;