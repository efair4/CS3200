//This screen displays a specific list.

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    Text,
    TouchableOpacity,
    FlatList,
    TextInput,
    Alert,
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
import BackHomeButton from '../components/BackHomeButton';
import {CustomListItem} from '../models/CustomListItem';
import {addItem, deleteItem, checkItem} from '../actions/actions';

class ListScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            headerLeft: <BackHomeButton navigation={navigation}/>
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
                    if(!item.checked) {
                        return(
                            <ListItem>
                                <Left>
                                    <CheckBox 
                                        onPress={() => this.props.dispatchCheckItem(this.props.list, item)}
                                        checked={item.checked}/>
                                </Left>
                                <Body>
                                    <Text style={styles.uncheckedItem}>
                                        {item.name}
                                    </Text>
                                </Body>
                                <Right>
                                    <Icon 
                                        name='times-circle'
                                        size={25}
                                        onPress={() => this._launchAlert(this.props.list, item)}/>
                                </Right>
                            </ListItem>
                        );
                    }
                    else {
                        return null;
                    }
                }}/>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: 300}}>
                 <TextInput
                ref={c => this.textInputRef=c} 
                style={styles.newItemTextInput}
                keyboadType='default'
                placeholder='Add a New Item'
                keyboardShouldPersistTaps='never' 
                enablesReturnKeyAutomatically={true}          
                onChangeText={(val) => this.setState({item: val})}
                onSubmitEditing={() => this.itemSubmitted()}
                 />
                 <Icon 
                        name="times-circle"
                        size={this.state.item.length != 0 ? 25: 0}
                        onPress={() => {this.setState({item: ""}); this.textInputRef.clear()}}/>
                </View>
                <List 
                keyboardDismissMode='on-drag'
                dataArray={this.props.list.listItems}
                renderRow={(item) => {
                    if(item.checked) {
                        return(
                            <ListItem>
                                <Left>
                                    <CheckBox 
                                        onPress={() => this.props.dispatchCheckItem(this.props.list, item)}
                                        checked={item.checked}/>
                                </Left>
                                <Body>
                                    <Text style={styles.checkedItem}>
                                        {item.name}
                                    </Text>
                                </Body>
                                <Right>
                                    <Icon 
                                        name="times-circle"
                                        size={25}
                                        onPress={() => this._launchAlert(this.props.list, item)}/>
                                </Right>
                            </ListItem>
                        );
                    }
                    else {
                        return null;
                    }
                }}/>
        </Content>
       
        </View>
        );
    }

    _launchAlert(list, item) {
        Alert.alert(
            'Confirm Delete',
            'Would you really like to delete \'' + item.name + '\'?',
                [
                    {text: 'Cancel', onPress: null},
                    {text: 'Delete', onPress: () => this.props.dispatchDeleteItem(list, item)},
                ],
                {cancelable: false}
        );
    }

    itemSubmitted() {
        this.setState({item: ""});
        this.textInputRef.clear();
        this.props.dispatchAddItem(this.props.list, new CustomListItem(this.state.item));
    }
}

const mapStateToProps = (state,props) => {
    return {
        list: state.lists.find(item => item.id === props.navigation.state.params.list.id)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchAddItem: (list, item) => dispatch(addItem(list, item)),
        dispatchDeleteItem: (list, item) => dispatch(deleteItem(list, item)),
        dispatchCheckItem: (list, item) => dispatch(checkItem(list, item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);