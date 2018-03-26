//This is the movie detail screen.

import React, {Component} from 'react';
import {
    Platform,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView,
    View
} from 'react-native';
import styles from '../styles/Styles';
import movieService from '../services/movie.service';
import apiService from '../services/api.service';
import keyKeeper from '../services/KeyKeeper';


export default class MovieDetailScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.navigation.state.params.data,
            detailInfo: null,
            castInfo: null
        };
    }

    componentDidMount() {
        this._getDetailInfo();
        this._getCastInfo();
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
                {this.state.detailInfo != null && this.state.castInfo != null ? this._getDisplay() : <Text style={styles.waitMessage}>...Just a moment</Text> }
            </View>
        );
    }

    _getDetailInfo() {
        movieService.getMovie(this.state.data.id)
        .then(response => {
            this.setState({
                detailInfo: response
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    _getCastInfo() {
        var cast = [];
        movieService.getMovieCredits(this.state.data.id)
        .then(response => {
            for(i = 0; i < response.length; i++) {
                movieService.getPersonInfo(response[i])
                .then(res => {
                    cast.push({characterName: res.character, person: res.person});
                    if(cast.length == response.length) {
                        this.setState({
                            castInfo: cast
                        });
                    }
                })
                .catch(error => {
                    console.error(error);
                });
            };
        })
        .catch(error => {
            console.error(error);
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
                    {this.state.data.overview}
                </Text>
                <Text style={styles.regularText}>
                    All Genres: {this._listGenres()}
                </Text>
                <Text style={styles.regularText}>
                    Popularity: {this.state.data.popularity}
                </Text>
                <Text style={styles.regularText}>
                    Release Date: {this.state.data.releaseDate}
                </Text>
                <Text style={styles.regularText}>
                    Budget: ${this.state.detailInfo.budget}
                </Text>
                <Text style={styles.regularText}>
                    Revenue: ${this.state.detailInfo.revenue}
                </Text>
                <Text style={styles.regularText}>
                    Status: {this.state.detailInfo.status}
                </Text>
                <Text style={styles.title}>
                    Cast
                </Text>
                <FlatList 
                    horizontal={true}
                    ItemSeparatorComponent={this._getSeparator}
                    data={this.state.castInfo}
                    keyExtractor= {(item, index) => keyKeeper.getKey()}
                    renderItem={this._renderCastMember}
                />
            </ScrollView>
        );
    }

    _listGenres() {
        var genreList = '';
        var genres = this.state.detailInfo.genres
        for(i = 0; i < genres.length; i++) {
            genreList += genres[i].name;
            if(i < (genres.length - 1)) {
                genreList += ', ';
            }
        };
        return genreList;
    }

    _renderCastMember = ({item}) => {
        return(
            <View style={styles.horizontalItem}>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('PersonDetailScreen', {data: item.person.getInfo()})}
            >
                <Image
                    style={styles.horizontalImage} 
                    source={{uri: item.person.imagePath}}
                    resizeMode='contain'
                />
                <Text style={styles.horizontalText}>
                    {item.person.name} as {item.characterName}
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