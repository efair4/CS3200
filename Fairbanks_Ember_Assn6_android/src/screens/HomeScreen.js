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
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Styles';
import NewListButton from '../components/NewListButton';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {backgroundColor: '#2097F4'},
            headerTitleStyle: {color: 'white'},
            headerRight: <NewListButton navigation={navigation}/>,
        }
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
                    return(
                        <ListItem>
                            <Left>
                                <Image source={item.icon}/>
                            </Left>
                            <Body>
                                <Text  
                                    style={styles.listItem}
                                    onPress={() => this.props.navigation.navigate('ListScreen', {list: item})}
                                >
                                    {item.listName}
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

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);