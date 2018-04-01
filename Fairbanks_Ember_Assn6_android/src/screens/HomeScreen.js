//This screen displays the user's list of lists.

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    View
} from 'react-native';
import {
	Content,
	List,
    ListItem,
    Right,
    Left,
    Body
} from 'native-base';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Styles';
import NewListButton from '../components/NewListButton';
import {setLists, deleteList} from '../actions/actions';

var self;

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {backgroundColor: '#2097F4'},
            headerTitleStyle: {color: 'white'},
            headerRight: <NewListButton navigation={navigation} refreshHomeScreen={() => self.forceUpdate()}/>,
        }
    }

    componentDidMount() {
        // this.props.dispatchSetLists();
        self = this;
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.lists.length != 0 ? this._renderLists() : <Text style={styles.message}>You don't have any lists yet. Tap the plus in the top right to create one!</Text> }
            </View>
        );
    }

    _renderLists() {
        return (
            <Content>
            <List dataArray={this.props.lists}
                renderRow={(item) => {
                    var swipeoutButtons = [{
                        text: 'Delete',
                        onPress: () => {this.props.dispatchDeleteList(item)}
                    }]
                    return(
                        <Swipeout right={swipeoutButtons}
                        autoClose={true}
                        backgroundColor='transparent'>
                        <ListItem 
                        onPress={() => this.props.navigation.navigate('ListScreen', {list: item})}>
                            <Left>
                                <Image
                                    style={styles.listIcon} 
                                    source={this.props.imagePaths[item.icon]}
                                    resizeMode='contain'/>
                            </Left>
                            <Body>
                                <Text  
                                    style={styles.listName}
                                >
                                    {item.listName}
                                </Text>
                                <Text  
                                    style={styles.dateCreated}
                                >
                                    {item.dateCreated}
                                </Text>
                            </Body>
                            <Right>
                                <Icon name="chevron-right"/>
                            </Right>
                        </ListItem>
                        </Swipeout>
                    );
                }}/>
            </Content>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists,
        imagePaths: state.imagePaths
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchSetLists: () => dispatch(setLists()),
        dispatchDeleteList: (list) => dispatch(deleteList(list))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);