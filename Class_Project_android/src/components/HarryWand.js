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
import ElderWand from './ElderWand'
//import HarrysWand from './pictures/HarrysWand'

export default class HarryWand extends Component
{
    static navigationOptions = {
        title: 'HarryWand'
    }
    render()
    {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          };
        return(
        <GestureRecognizer
        onSwipeRight={()=>{this.props.navigation.navigate('ElderWand')}}
        config={config}
        >
           <View>
                <Image source={require('./pictures/HarrysWand.png')}/>
            </View> 
        </GestureRecognizer>
        );
    }
}