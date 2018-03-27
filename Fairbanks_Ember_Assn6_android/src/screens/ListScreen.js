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

class ListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {backgroundColor: '#2097F4'},
            headerTitleStyle: {color: 'white'},
            headerRight: <NewListButton/>
        }
    }

    render() {
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
                                    onPress={() => this.props.dispatchNavigate('ListScreen')}
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