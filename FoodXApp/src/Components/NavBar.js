import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FDColors from '../Utils/FDColors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function NavBar(props) {
    return (
        <SafeAreaView style={style.container} >
            <View style={style.subContainer}>

                {props.isLeft ?
                    <MaterialIcons style={style.imageStyle} name={props.isLeft} size={25} onPress={props.onLeft} />
                    : null
                }
                <Text style={style.textStyle}>{props.title}</Text>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: FDColors.primary
    },
    subContainer:{
        height: 60, backgroundColor: FDColors.primary, flexDirection: 'row', alignItems: 'center'
    },
    imageStyle:{
        marginHorizontal:10
    },
    textStyle:{
        flex: 1, marginHorizontal:10
    }
})

export default NavBar;