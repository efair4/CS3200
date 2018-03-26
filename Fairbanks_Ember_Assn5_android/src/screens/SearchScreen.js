//This is the home screen that displays a list of genres.

import React, {Component} from 'react';
import {
    Platform,
    Text,
    TouchableOpacity,
	FlatList,
	TextInput,
    View
} from 'react-native';
import {
	Content,
	List,
	ListItem
} from 'native-base';
import styles from '../styles/Styles';
import movieService from '../services/movie.service';
import keyKeeper from '../services/KeyKeeper';
import Movie from '../models/Movie';
import Person from '../models/Person';
import MovieSummary from '../components/MovieSummary';
import PersonSummary from '../components/PersonSummary';

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
			searchResults: [],
			searchVal: '',
			page: 1,
			totalPages: 1,
			loading: false
        }
	}
	
	static navigationOptions = ({ navigation }) => {
		return {
			headerStyle: {backgroundColor: '#2097F4'},
			headerTitleStyle: {color: 'white'}
		 }
	 }

    render() {
        return (
            <View style={styles.container}>
				<TextInput 
					autoFocus={true}
					style = {styles.textInput}
					keyboardType = 'default'
					placeholder = 'Tap here to search'
					placeholderTextColor='black'
					underlineColorAndroid='black'
					keyboardShouldPersistTaps='never'
					onChangeText = {(val) => this.setState({searchVal: val, totalPages: 1, page: 1})}
					onSubmitEditing = {() => {
						this._doSearch(false);
					}}
				/>
				<View style={styles.container}>
					{this.state.searchResults.length != 0 ? this._renderResults() : <Text style={styles.title}> No Results </Text> }
				</View>
			</View>
        );
    }

	_doSearch(shouldAdd) {
		if(this.state.page <= this.state.totalPages && !this.state.loading) {
			this.setState({
				loading: true
			});
			movieService.performSearch(this.state.page,this.state.searchVal)
			.then(results => {
				if(this.state.totalPages === 1) {
					this.setState({
						totalPages: results.totalPages
					});
				}
				var allResults = [];
				if(shouldAdd) {
					allResults = this.state.searchResults.concat(results.items);
				}
				else {
					allResults = results.items
				}
				this.setState(prevState => {
					return {
						searchResults: allResults,
						page: prevState.page + 1,
						loading: false
					}
				});
			})
			.catch(error => {
				console.log('Something went wrong in the _doSearch call');
			})
		}
	}

	_renderResults() {
		return (
			<Content>
				<List 
					style={{height: 465}}
					onEndReachedThreshold={0.1}
					onEndReached={() => {
						if(!this.state.loading) {
							this._doSearch(true);
						}
					}}
					dataArray={this.state.searchResults}
					renderRow={(item) => {
						let typeName = item.constructor.name;
						if (typeName === 'Movie') {
							return (
								<ListItem>
								<MovieSummary
									data = {item.getInfo()}					
									navigation = {this.props.navigation}
								/>
								</ListItem>
							);
						}
						else if (typeName === 'Person') {
							return (
								<ListItem>
								<PersonSummary 
									data = {item.getInfo()}
									navigation = {this.props.navigation}
								/>
								</ListItem>
							);
						}
						else {
							console.log('That is not a type!');
						}
					}}
				/>
			</Content>
		)
	}
}