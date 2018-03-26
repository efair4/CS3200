//This is the person summary component.

import React, {Component} from 'react';
import {
    Platform,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    View
} from 'react-native';
import styles from '../styles/Styles';


export default class PersonSummary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity 
                style={styles.searchItem}    
				onPress={() => this.props.navigation.navigate('PersonDetailScreen', {data: this.props.data})}
            >
                <Image
                    style={styles.posterImage} 
                    source={this.props.data.imagePath != null ? {uri: this.props.data.imagePath} : require('../images/no_image_available.jpeg')}
                    resizeMode='contain'
                />
                <Text style={styles.searchTitle}>
                    {this.props.data.name}
                </Text>
                <Text style={styles.regularText}>
                    Popularity: {this.props.data.popularity}
                </Text>
            </TouchableOpacity>
        );
    }
}