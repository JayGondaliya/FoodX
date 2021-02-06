import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import NavBar from '../Components/NavBar'
import RestaurantComponent from '../Components/RestaurantComponent'
import FDColors from '../Utils/FDColors'

class HomeContainer extends React.Component {

    constructor(props) {
        super(props)

        this.arrayOfRestaurant = [
            {
                name:'demo restaurant 1',
                image: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68'
            },
            {
                name:'demo restaurant 2',
                image: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68'
            }
        ]
    }
renderRestarantView = ({item}) => {
    return(
        <RestaurantComponent item={item}/>
    )
}
    render() {
        return (
            <View style={style.container}>
                <NavBar title={'Dashboard'} isLeft={this.props.isLoggedIn ? 'menu' : ""} onLeft={() => { this, this.props.navigation.openDrawer(); }} />

                <FlatList
                    data={this.arrayOfRestaurant}
                    renderItem={this.renderRestarantView}
                    keyExtractor={(item, index) => item}
                />

            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex: 1, backgroundColor:FDColors.black
    },
})

export default connect(
    state => {
        console.log("STATE ::::: ", state)
        return {
            isLoggedIn: state.userLoginStatus.isLoggedIn
        }
    },
    dispatch => {
        return{

        }
    }
)(HomeContainer);