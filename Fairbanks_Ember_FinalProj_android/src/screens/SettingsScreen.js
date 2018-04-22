import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    Text,
    TouchableOpacity,
    FlatList,
    TextInput,
    ScrollView,
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
import SaveCancelButton from '../components/SaveCancelButton';

import {saveSettings} from '../actions/actions';

var self;

class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            editable: false,
            textInputStyle: styles.noEditSettingsInputView,
            nameVal: this.props.username,
            addressVal: this.props.address,
            totalTripsVal: this.props.goals.totalTrips,
            activeTripsVal: this.props.goals.activeTrips,
            pubTripsVal: this.props.goals.pubTrips
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
            headerRight: params.editable ? <SaveCancelButton 
                                                    savePressed={() => params.donePressed()}
                                                    cancelPressed={() => params.setEditable()}/> 
                                                : <EditButton 
                                                    editPressed={() => params.setEditable()}/>
        }
    }

    render() {
        return (
            <ScrollView 
                style={styles.settingsScrollView}
                contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.settingsInfoText}>
                    Personal Information and Goals 
                </Text>
                <Text style={styles.settingsHeader}>
                    Name
                </Text>
                <View style={this.state.textInputStyle}>
                    <TextInput style={styles.settingsInput}
                        placeholder='Name'
                        value={this.state.nameVal}
                        autoFocus={true}
                        keyboardType = 'default'
                        underlineColorAndroid='transparent'
                        keyboardShouldPersistTaps='never'
                        editable={this.state.editable}
                        onChangeText = {(val) => this.setState({nameVal: val})}
                    />
                </View>
                <Text style={styles.settingsHeader}>
                    Address
                </Text>
                <View style={this.state.textInputStyle}>
                    <TextInput style={styles.settingsInput}
                        placeholder='Address'
                        value={this.state.addressVal}
                        autoFocus={true}
                        keyboardType = 'default'
                        underlineColorAndroid='transparent'
                        keyboardShouldPersistTaps='never'
                        editable={this.state.editable}
                        onChangeText = {(val) => this.setState({addressVal: val})}
                    />
                </View>
                <Text style={styles.settingsHeader}>
                    Goals
                </Text>
                <Text style={styles.settingsSubheader}>
                    How many total trips do you want to save each week?
                </Text>
                <View style={this.state.textInputStyle}>
                    <TextInput style={styles.settingsInput}
                        placeholder='Enter some number of trips'
                        value={String(this.state.totalTripsVal)}
                        autoFocus={true}
                        keyboardType = 'default'
                        underlineColorAndroid='transparent'
                        keyboardShouldPersistTaps='never'
                        editable={this.state.editable}
                        onChangeText = {(val) => this.setState({totalTripsVal: val})}
                    />
                </View>
                <Text style={styles.settingsSubheader}>
                    How many trips do you want to save by using active transportation each week?
                </Text>
                <View style={this.state.textInputStyle}>
                    <TextInput style={styles.settingsInput}
                        placeholder='Enter some number of trips'
                        value={String(this.state.activeTripsVal)}
                        autoFocus={true}
                        keyboardType = 'default'
                        underlineColorAndroid='transparent'
                        keyboardShouldPersistTaps='never'
                        editable={this.state.editable}
                        onChangeText = {(val) => this.setState({activeTripsVal: val})}
                    />
                </View>
                <Text style={styles.settingsSubheader}>
                    How many trips do you want to save by using public transportation each week?
                </Text>
                <View style={this.state.textInputStyle}>
                    <TextInput style={styles.settingsInput}
                        placeholder='Enter some number of trips'
                        value={String(this.state.pubTripsVal)}
                        autoFocus={true}
                        keyboardType = 'default'
                        underlineColorAndroid='transparent'
                        keyboardShouldPersistTaps='never'
                        editable={this.state.editable}
                        onChangeText = {(val) => this.setState({pubTripsVal: val})}
                    />
                </View>
            </ScrollView>
        )
    }

    _setEditable() {
        var edit = self.state.editable;
        var textStyle;
        if(edit) {
            textStyle = styles.noEditSettingsInputView;
        }
        else {
            textStyle = styles.editSettingsInputView;
        }
        self.setState({
            editable: !edit,
            textInputStyle: textStyle
        });
        self.props.navigation.setParams({
            editable: !edit
        });
    }

    _donePressed() {
        self.props.dispatchSaveSettings(self.state.nameVal, self.state.addressVal, 
            {totalTrips: self.state.totalTripsVal, activeTrips: self.state.activeTripsVal, pubTrips: self.state.pubTripsVal});
        self._setEditable();
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
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