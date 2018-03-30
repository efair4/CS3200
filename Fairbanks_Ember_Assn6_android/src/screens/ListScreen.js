//This screen displays a specific list.

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
    componentDidMount() {
        this.props.navigation.setParams({screenTitle: this.props.list.listName});
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.screenTitle,
            headerStyle: {backgroundColor: '#2097F4'},
            headerTitleStyle: {color: 'white'},
        }
    }

    render() {
        <Content>
            <List dataArray={this.props.lists}
                renderRow={(item) => {
                    return(
                        <ListItem>
                            <Left>
                                <Icon name={item.icon}/>
                            </Left>
                            <Body>
                                <Text  
                                    style={styles.listItem}
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
    }
}

const mapStateToProps = (state,props) => {
    return {
        list: props.navigation.state.params.list
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchAddItem: (item) => dispatch(addItem(item)),
        dispatchDeleteItem: (item) => dispatch(deleteItem(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);