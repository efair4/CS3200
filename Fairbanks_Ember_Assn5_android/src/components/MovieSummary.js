//This is the movie summary component.

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


export default class MovieSummary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity 
                style={styles.searchItem}
                onPress={() => this.props.navigation.navigate('MovieDetailScreen', {data: this.props.data})}
            >
                <Image
                    style={styles.posterImage} 
                    source={this.props.data.imagePath != null ? {uri: this.props.data.imagePath} : require('../images/no_image_available.jpeg')}
                    resizeMode='contain'
                />
                <Text style={styles.searchTitle}>
                    {this.props.data.name}
                </Text>
                <Text 
                    style={styles.regularText}
                    numberOfLines={2}
                    wrapText = 'word'
                >
                    {this.props.data.overview}
                </Text>
                <Text style={styles.regularText}>
                    Popularity: {this.props.data.popularity}
                </Text>
                <Text style={styles.regularText}>
                    Release Date: {this.props.data.releaseDate}
                </Text>
            </TouchableOpacity>
        );
    }
}