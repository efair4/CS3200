//This screen displays the user's list of lists.

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    Text,
    TouchableOpacity,
    FlatList,
    TextInput,
    Image,
    Alert,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Styles';
import DoneButton from '../components/DoneButton';
import CancelButton from '../components/CancelButton';
import IconButton from '../components/IconButton';
import keyKeeper from '../utils/KeyKeeper';
import { addList } from '../actions/actions';
import { List } from '../models/List';

var self;
class CreateListScreen extends Component {
    constructor(props) {
        super(props);

        self = this;

        this.state = {
            listName: null,
            icon: null,
            dateCreated: null,
            selected: new Map(),
        }
    }

    static navigationOptions = ({ navigation }) => {
        const {params = {}} = navigation.state;
        return {
            headerStyle: {backgroundColor: '#2097F4'},
            headerTitleStyle: {color: 'white'},
            headerRight: <DoneButton doneButtonPressed={() => params.donePressed(navigation)}/>,
            headerLeft: <CancelButton navigation={navigation}/>
        }
    }

    componentDidMount() {
        var today = new Date();
        var day = today.getDate();
        var month = this._getMonthString(today.getMonth() + 1);
        var year = today.getFullYear();
        this.setState({
            dateCreated: month + ' ' + day + ', ' + year
        }); 
        this.props.navigation.setParams({
            donePressed: this._donePressed
        });
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    keyboadType='default'
                    placeholder='List Name'
                    keyboardShouldPersistTaps='never'
                    onChangeText={(val) => this.setState({listName: val})}
                />
                <Text style={{fontSize: 25, color: 'black'}}>
                    Choose an icon for your list!
                </Text>
                <FlatList 
                    contentContainerStyle={{alignItems: 'center', marginTop: 8}}
                    data={this.props.imagePaths}
                    extraData={this.state}
                    numColumns={3}
                    keyExtractor={(item, index) => keyKeeper.getKey()}
                    renderItem={this._renderIcon}
                />
            </View>
        );
    }

    _renderIcon = ({item}) => {
        return (
            <IconButton
                id={item}
                selected={!!this.state.selected.get(item)}
                icon={item}
                setIcon={() => this._onPressIcon(item)}
            />
        )
    }

    _onPressIcon(item) {
        this.setState((state) => {
            const selected = new Map();
            selected.set(item, !selected.get(item)); 
            return {selected, icon: item-1};
        });
    }

    _donePressed(navigation, state) {
        if(self.state.listName === null || self.state.listName.length === 0) {
            self._launchAlert('No Name!', 'Please give your list a name');
        } 
        else if (self.state.icon === null) {
            self._launchAlert('No Icon!', 'Please select an icon for your list');
        }
        else {
            self.props.dispatchAddList(new List(self.state.listName, self.state.icon, self.state.dateCreated));
            navigation.goBack();
        }
    }

    _launchAlert(title, msg) {
        Alert.alert(
            title,
            msg,
                [
                    {text: 'OK', onPress: null},
                ],
                {cancelable: true}
        );
    }

    _getMonthString(monthInt) {
        switch(monthInt) {
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
            default:
                return 'March';
        }
    }
}

const mapStateToProps = (state) => {
    return {
        imagePaths: state.imagePaths
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchAddList: (list) => dispatch(addList(list))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateListScreen);