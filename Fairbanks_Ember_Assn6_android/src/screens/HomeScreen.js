//This screen displays the user's list of lists.

import React, {Component} from 'react';
import { connect } from 'react-redux';
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
            headerRight: <NewListButton/>,
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
                                <Icon name={item.getIconName()}/>
                            </Left>
                            <Body>
                                <Text  
                                    style={styles.listItem}
                                    onPress={() => this.props.dispatchNavigate('ListScreen', {listName: item.getName()})}
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

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchNavigate: (screen) => dispatch(navigate(screen))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);