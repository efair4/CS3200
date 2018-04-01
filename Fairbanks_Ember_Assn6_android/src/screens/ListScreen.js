//This screen displays a specific list.

import React, {Component} from 'react';
import { connect } from 'react-redux';
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
    ListItem,
    Right,
    Left,
    Body,
    CheckBox
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Styles';
import ListItem from '../models/ListItem';
import {addItem, deleteItem} from '../actions/actions';

class ListScreen extends Component {
    constructor(props) {
        super(props);

        this.state= {
            item: ''
        }
    }
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
        return (
        <View style={styles.container}>
        <Content>
            <List 
                keyboardDismissMode='on-drag'
                dataArray={this.props.list.listItems}
                renderRow={(item) => {
                    return(
                        <ListItem>
                            <Left>
                                <CheckBox 
                                    onPress={() => this.onCheckPress(item)}
                                    checked={item.checked}/>
                            </Left>
                            <Body>
                                <Text  
                                    style={styles.listItem}
                                >
                                    {item.name}
                                </Text>
                            </Body>
                            <Right>
                                <Icon 
                                    name="times-circle"
                                    size={30}
                                    onPress={() => this.props.dispatchDeleteItem(this.props.list, item)}/>
                            </Right>
                        </ListItem>
                    );
                }}/>
                 <TextInput
                style={styles.newItemTextInput}
                keyboadType='default'
                placeholder='New Item'
                keyboardShouldPersistTaps='never'
                onChangeText={(val) => this.setState({item: val})}
                onSubmitEditing={() => {
                    this.setState({item: ''});
                    this.props.dispatchAddItem(this.props.list, new ListItem(this.state.item))}
                }
            />
        </Content>
       
        </View>
        );
    }
}

const mapStateToProps = (state,props) => {
    var thislist = state.lists.find(item => item.id === props.navigation.state.params.list.id);
    return {
        list: state.lists.find(item => item.id === props.navigation.state.params.list.id)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchAddItem: (list, item) => dispatch(addItem(list, item)),
        dispatchDeleteItem: (list, item) => dispatch(deleteItem(list, item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);