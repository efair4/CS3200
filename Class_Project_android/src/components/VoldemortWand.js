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
import {HarryWand} from './HarryWand'

export default class VoldemortWand extends Component
{
    static navigationOptions = {
        title: 'VoldemortWand'
    }
    render()
    {
        let pic = require('./pictures/VoldemortWand.png');
        return(
        <GestureRecognizer
        onSwipeRight={()=>{this.props.navigation.navigate('HarryWand')}}
       // config={config}
        >
           <View>
                <Image source={pic} style={{width:300, height:200}}/>
            </View> 
        </GestureRecognizer>
        );
    }
}