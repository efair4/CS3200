import React, { Component } from 'react';
import {
    Container,
    Header,
    Content,
    Text,
    View,
    Image,
    Body
} from 'native-base';
import {StackNavigator} from 'react-navigation'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {VoldemortWand} from './VoldemortWand'
export default class ElderWand extends Component
{
    static navigationOptions = {
        title: 'ElderWand'
    }
    render()
    {
        let pic = require('../components/pictures/ElderWand.png');
        return(
        <GestureRecognizer
        onSwipeRight={()=>{this.props.navigation.navigate('VoldemortWand')}}
       // config={config}
        >
           <View>
                <Image source={pic} style={{width:300, height:200}}/>
            </View> 
        </GestureRecognizer>
        );
    }
}