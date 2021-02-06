import React from 'react'
import { Alert, ImageBackground, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import Assets from '../assets/images'
import FDTextInput from '../Components/FDTextInput'
import ThemeButton from '../Components/ThemeButton'
import { saveUserLoginStatusInRedux } from '../redux/action/User'
import { saveUserLoginStatus } from '../Utils/AsyncStorageHelper'

class LoginContainer extends React.Component {

    constructor(props) {
        super(props)

    }

    state = {
        userName: "",
        password: ""
    }

    onChangeNameHandler = (text) => {
        this.setState({
            userName: text
        })
    }

    onChangePasswordHandler = (text) => {
        this.setState({
            password: text
        })
    }

    onLoginPress = () => {
        if (this.state.userName.trim() !== "" && this.state.password.trim() !== "") {
            saveUserLoginStatus(true, () => { }, () => { })
            this.props.saveUserLoginStatus(true)
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        } else {
            Alert.alert("", "Please enter field", [], () => { })
        }

    }

    render() {
        return (
            <ImageBackground style={style.imageStyle} source={Assets.login}>
                <FDTextInput
                    value={this.state.userName}
                    placeholder={'Enter username'}
                    onChangeText={this.onChangeNameHandler}
                />

                <FDTextInput
                    value={this.state.password}
                    placeholder={'Enter password'}
                    secureTextEntry={true}
                    onChangeText={this.onChangePasswordHandler}
                />

                <ThemeButton
                    title={"Login"}
                    style={style.buttonStyle}
                    onPress={this.onLoginPress}
                />
            </ImageBackground>
        )
    }
}

const style = StyleSheet.create({
    imageStyle: {
        width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'
    },
    buttonStyle: {
        marginTop: 30
    }
})

export default connect(
    state => {
        return {
        }
    },
    dispatch => {
        return {
            saveUserLoginStatus: data => {
                dispatch(saveUserLoginStatusInRedux(data));
            },
        }
    }
)(LoginContainer);