import React from 'react'
import LoginContainer from "../Containers/LoginContainer";
import SplashContainer from "../Containers/SplashContainer";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import HomeContainer from '../Containers/HomeContainer';
import SideBar from './SideBar';

export const MAIN_DRAWER_STACK = createDrawerNavigator();

function MAIN_DRAWER({ navigation }) {
    return (
        <MAIN_DRAWER_STACK.Navigator initialRouteName={"Home"} drawerContent={props => <SideBar {...props} />}>
            <MAIN_DRAWER_STACK.Screen name="Home" component={MAIN_STACK_NAVIGATOR} />
        </MAIN_DRAWER_STACK.Navigator>
    );
}

export const MAIN_STACK = createStackNavigator();

function MAIN_STACK_NAVIGATOR({ navigation }) {
    return (
        <MAIN_STACK.Navigator headerMode={'none'} initialRouteName={'HomeContainer'} >
            <MAIN_STACK.Screen name="HomeContainer" component={HomeContainer} />
        </MAIN_STACK.Navigator>
    )
}

export const BASE_STACK = createStackNavigator();

export default function BASE_STACK_NAVIGATOR({ navigation }) {
    return (
        <NavigationContainer >
            <BASE_STACK.Navigator headerMode={'none'} initialRouteName={'SplashContainer'}>
                <BASE_STACK.Screen name="SplashContainer" component={SplashContainer} />
                <BASE_STACK.Screen name="LoginContainer" component={LoginContainer} />
                <BASE_STACK.Screen name="Home" component={MAIN_DRAWER} />
            </BASE_STACK.Navigator>
        </NavigationContainer>
    );
}