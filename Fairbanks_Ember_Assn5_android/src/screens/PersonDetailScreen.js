//This is the person detail screen.

import React, {Component} from 'react';
import {
    Platform,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView,
    View
} from 'react-native';
import styles from '../styles/Styles';
import movieService from '../services/movie.service';
import keyKeeper from '../services/KeyKeeper';


export default class PersonDetailScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.navigation.state.params.data,
            detailInfo: null,
            creditInfo: null
        };
    }

    componentDidMount() {
        this._getDetailInfo();
        this._getCreditInfo();
        this.props.navigation.setParams({screenTitle: this.props.navigation.state.params.data.name});
    }

    static navigationOptions = ({ navigation }) => {
       return {
           title: navigation.state.params.screenTitle,
           headerStyle: {backgroundColor: '#2097F4'},
           headerTitleStyle: {color: 'white'}
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.detailInfo != null && this.state.creditInfo != null ? this._getDisplay() : <Text style={styles.waitMessage}>...Just a moment</Text> }
            </View>
        );
    }

    _getDetailInfo() {
        movieService.getPerson(this.state.data.id)
        .then(response => {
            this.setState({
                detailInfo: response
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    _getCreditInfo() {
        movieService.getPersonCredits(this.state.data.id)
        .then(response => {
            this.setState({
                creditInfo: response
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    _getDisplay() {
        return (
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
            >
                <Text style={styles.title}>
                    {this.state.data.name}
                </Text>
                <Image
                    style={styles.posterImage} 
                    source={{uri: this.state.data.imagePath}}
                    resizeMode='contain'
				/>
                <Text style={styles.regularText}>
                    Born: {this.state.detailInfo.birthday}
                </Text>
                {this.state.detailInfo.deathday != null ? <Text style={styles.regularText}>
                    Died: {this.state.detailInfo.deathday}
                </Text> : null}
                <Text style={styles.regularText}>
                    Birthplace: {this.state.detailInfo.birthplace}
                </Text>
                <Text style={styles.regularText}>
                    {this.state.detailInfo.biography}
                </Text>
                <Text style={styles.title}>
                    Other Movies
                </Text>
                <FlatList 
                    horizontal={true}
                    ItemSeparatorComponent={this._getSeparator}
                    data={this.state.creditInfo}
                    keyExtractor= {(item, index) => keyKeeper.getKey()}
                    renderItem={this._renderCredit}
                />
            </ScrollView>
        );
    }

    _renderCredit = ({item}) => {
        let data = item.getInfo();
        return(
            <View style={styles.horizontalItem}>
            <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('MovieDetailScreen', {data: data})}
            >
                <Image
                    style={styles.horizontalImage} 
                    source={data.imagePath != null ? {uri: data.imagePath} : require('../images/no_image_available.jpeg')}
                    resizeMode='contain'
                />
                <Text style={styles.horizontalText}>
                    {data.name}
                </Text>
                <Text style={styles.horizontalText}>
                    Release Year: {data.releaseDate.slice(0,4)}
                </Text>
            </TouchableOpacity>
            </View>
        );
    }

    _getSeparator() {
        return (
            <View style={{height: 400, width: 1, backgroundColor: 'lightgray'}}/>
        );
    }
}