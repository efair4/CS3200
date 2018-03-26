//This is the home screen that displays a list of genres.

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

export default class BrowseScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            genres: null
        }
    }

	static navigationOptions = ({ navigation }) => {
		return {
			headerStyle: {backgroundColor: '#2097F4'},
			headerTitleStyle: {color: 'white'}
		 }
	 }

    componentWillMount() {
        this._getGenres();
    }

    render() {
        return (
            <View style={styles.container}>
				{this.state.genres != null ? <Text style={styles.instructions}>
					Select a genre to view movies.
				</Text> : null}
				{this.state.genres != null ? this._renderGenreList() : <Text style={styles.waitMessage}> ...Just a moment</Text> }
			</View>
        );
    }

	_getGenres() {
		movieService.getGenres()
		.then(results => {
			this.setState({genres: results});
		})
		.catch(error => {
			console.log('Something went wrong in the _getGenres call');
		})
	}

	_renderGenreList() {
		return (
			<Content>
				<List dataArray={this.state.genres}
					renderRow={(item) =>{
						return (
							<ListItem>
								<Body>
									<Text 
										style = {styles.listItem}
										onPress={() => this.props.navigation.navigate('GenreScreen', {name: item.name, id: item.id})}
									>
										{item.getName()}
									</Text>
								</Body>
								<Right>
									<Icon name="chevron-right" />
								</Right>
							</ListItem>
						);
					}}/>
			</Content>
		);
	}
}