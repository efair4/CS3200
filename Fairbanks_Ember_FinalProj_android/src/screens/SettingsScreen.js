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
import {
	Content,
	List,
    ListItem,
    Right,
    Left,
    Body
} from 'native-base';

import styles from '../styles/Styles';
import EditButton from '../components/EditButton';
import SaveButton from '../components/SaveButton';

import {saveSettings} from '../actions/actions';

var self;

class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            editable: false,
            nameVal: this.props.name,
            addressVals: this.props.address,
            goalsVals: this.props.goals
        }
    }

    componentDidMount() {
        self = this;
        this.props.navigation.setParams({
            editable: this.state.editable,
            setEditable: this._setEditable,
            donePressed: this._donePressed
        });
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            headerRight: params.editable ? <SaveButton 
                                                    savePressed={() => params.donePressed()}/> 
                                                : <EditButton 
                                                    editPressed={() => params.setEditable()}/>
        }
    }

    render() {
        return (
            <View style={styles.settingsContainer}>
                <Text style={styles.settingsInfoText}>
                    Personal Information and Goals 
                </Text>
                <TextInput style={styles.settingsInput}
                    placeholder={this.state.nameVal}
                    value={this.state.nameVal}
                    autoFocus={true}
					keyboardType = 'default'
					underlineColorAndroid='black'
                    keyboardShouldPersistTaps='never'
                    editable={this.state.editable}
					onChangeText = {(val) => this.setState({nameVal: val})}
				/>
            </View>
        )
    }

    _setEditable() {
        var edit = self.state.editable;
        self.setState({
            editable: !edit
        });
        self.props.navigation.setParams({
            editable: !edit
        });
    }

    _donePressed() {
        self.props.dispatchSaveSettings(self.state.nameVal, self.state.addressVals, self.state.goalsVals);
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.username,
        address: state.address,
        goals: state.goals
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchSaveSettings: (name, address, goals) => dispatch(saveSettings(name, address, goals)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);