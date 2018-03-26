//This is the screen that appears when the user clicks
//on a genre from the home screen.

import React, {Component} from 'react';
import {
    Platform,
    Text,
    TouchableOpacity,
    FlatList,
    View
} from 'react-native';
import {
	Content,
	List,
    ListItem,
    Right,
    Body
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Styles';
import movieService from '../services/movie.service';

export default class GenreScreen extends Component {
    constructor(props) {
        super(props);

        const { params } = this.props.navigation.state;

        this.state = {
            movies: [],
            name: params.name,
            id: params.id,
            page: 1,
            totalPages: 1
        }
    }

    componentWillMount() {
        this._getMovies();
        this.props.navigation.setParams({screenTitle: this.props.navigation.state.params.name});
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
                {this.state.movies.length != 0 ? this._renderMovieList() : <Text style={styles.waitMessage}>...Just a moment</Text> }
            </View>
        );
    }

    _getMovies() {
        if(this.state.page <= this.state.totalPages) {
            movieService.getMovies(this.state.page, this.state.id) 
            .then(results => {
                if(this.state.totalPages == 1){
                    this.setState({
                        totalPages: results.totalPages
                    });
                }
                let allResults = this.state.movies.concat(results.items);
                this.setState(prevState => {
                    return {movies: allResults, page: prevState.page + 1}
                });
            })
            .catch(error => {
                console.log('Something went wrong in the _getMovies call');
            })
        }
	}

	_renderMovieList() {
        return (
            <Content>
                <List 
                    style={{height: 525}}
                    onEndReachedThreshold={0.2}
                    onEndReached={this._getMovies()}
                    dataArray={this.state.movies}
                    renderRow={(item) => {
                        return (
                            <ListItem>
                                <Body>
                                    <Text 
                                    style = {styles.listItem}
                                    onPress={() => this.props.navigation.navigate('MovieDetailScreen', {data: item.getInfo()})}
                                    >
                                        {item.getName()}
                                    </Text>
                                </Body>
                                <Right>
                                    <Icon name="chevron-right"/>
                                </Right>
                            </ListItem>
                        );
                    }}/>
            </Content>
        );
	}
}