import React from 'react'
import { Animated, Dimensions, ImageBackground, StyleSheet, View } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { connect } from 'react-redux'
import Assets from '../assets/images'
import ThemeButton from '../Components/ThemeButton'
import { saveUserLoginStatusInRedux } from '../redux/action/User'
import { getUserLoginStatus } from '../Utils/AsyncStorageHelper'

class SplashContainer extends React.Component {

    constructor(props) {
        super(props)

    }

    state = {
        bounceValue: new Animated.Value(Dimensions.get('screen').height),
    };

    componentDidMount() {

        getUserLoginStatus(
            (response) => {
                if (response == true) {
                    this.props.saveUserLoginStatus(response)
                    setTimeout(() => {
                        this.props.navigation.reset({
                            index: 0,
                            routes: [{ name: 'Home' }],
                        });
                    }, 3000)
                } else {
                    setTimeout(() => {
                        this._toggleSubview()
                    }, 3000)
                }
            },
            (error) => {
                setTimeout(() => {
                    this._toggleSubview()
                }, 3000)
            }
        )

    }

    _toggleSubview() {
        Animated.spring(this.state.bounceValue, {
            toValue: 0,
            velocity: 3,
            tension: 2,
            friction: 8,
            useNativeDriver: true,
        }).start();
    }

    render() {
        return (
            <View style={style.container}>
                <ImageBackground style={style.imageStyle} source={Assets.login}>
                    <Animated.View style={[style.animatedView, { transform: [{ translateY: this.state.bounceValue }] }]}>
                        <ThemeButton
                            title={"Login"}
                            onPress={() => {
                                this.props.navigation.navigate('LoginContainer');
                            }}
                        />
                        <ThemeButton
                            title={"Guest User"}
                            style={style.buttonStyle}
                            onPress={() => {
                                this.props.navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Home' }],
                                });
                            }}
                        />
                    </Animated.View>
                </ImageBackground>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    imageStyle:{
        width: '100%', height: '100%'
    },
    animatedView:{
        flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: heightPercentageToDP("10%")
    },
    buttonStyle:{
        marginTop: 10
    }
})
export default connect(
    state => {
        return {
        }
    },
    dispatch => {
        return{
            saveUserLoginStatus: data => {
                dispatch(saveUserLoginStatusInRedux(data));
            },
        }
    }
)(SplashContainer);