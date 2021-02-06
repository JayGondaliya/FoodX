import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View, Animated } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import FDColors from '../Utils/FDColors';

class RestaurantComponent extends React.Component {

    constructor(props) {
        super(props)
        this.delayValue = 500;
        this.state = {
          animatedValue: new Animated.Value(0),
          data:[]
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            Animated.spring(this.state.animatedValue, {
                toValue: 1,
                tension: 20,
                useNativeDriver: true
            }).start();
        },1000)
    }

    render() {
        this.delayValue = this.delayValue + 500;
        const translateX = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [this.delayValue, 1]
        });
        return (
            <Animated.View style={[style.container, { transform: [{ translateX }] }]}>
                <Image style={style.imageStyle} source={{ uri: this.props.item.image }} />
                <Text style={style.textStyle}>{this.props.item.name}</Text>
            </Animated.View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        marginHorizontal: 20, padding: 10
    },
    imageStyle: {
        height: widthPercentageToDP("40%")
    },
    textStyle: {
        marginVertical: 10, color: FDColors.primary
    }
})

export default RestaurantComponent;