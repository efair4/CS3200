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
    Container,
    Content,
    Header,
	List,
    ListItem,
    Separator
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
        this.content._root.scrollToPosition(0,0);
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
            <Container style={{backgroundColor: 'white'}}>
                <Content ref={c => (this.content = c)}>
                    <List>
                        <Separator bordered>            
                            <Text style={styles.settingsHeader}>
                                Name
                            </Text>
                        </Separator>
                        <ListItem>
                            <View style={this.state.textInputStyle}>
                                <TextInput style={styles.settingsInput}
                                    placeholder='Name'
                                    value={this.state.nameVal}
                                    keyboardType = 'default'
                                    autoFocus={false}
                                    underlineColorAndroid='transparent'
                                    keyboardShouldPersistTaps='never'
                                    editable={this.state.editable}
                                    onChangeText = {(val) => this.setState({nameVal: val})}
                                />
                            </View>
                        </ListItem>
                        <Separator bordered>            
                            <Text style={styles.settingsHeader}>
                                Address
                            </Text>
                        </Separator>
                        <ListItem>
                            <View style={this.state.textInputStyle}>
                                <TextInput style={styles.settingsInput}
                                    placeholder='Address'
                                    value={this.state.addressVal}
                                    autoFocus={false}
                                    keyboardType = 'default'
                                    underlineColorAndroid='transparent'
                                    keyboardShouldPersistTaps='never'
                                    editable={this.state.editable}
                                    onChangeText = {(val) => this.setState({addressVal: val})}
                                />
                            </View>
                        </ListItem>
                        <Separator bordered >
                            <Text style={styles.settingsHeader}>
                                Goals
                            </Text>
                        </Separator>
                        <ListItem itemDivider>
                            <Text style={styles.settingsSubheader}>
                                How many total trips do you want to save each week?
                            </Text>
                        </ListItem>
                        <ListItem>
                            <View style={this.state.textInputStyle}>
                                <TextInput style={styles.settingsInput}
                                    placeholder='Enter some number of trips'
                                    value={String(this.state.totalTripsVal)}
                                    autoFocus={false}
                                    keyboardType = 'default'
                                    underlineColorAndroid='transparent'
                                    keyboardShouldPersistTaps='never'
                                    editable={this.state.editable}
                                    onChangeText = {(val) => this.setState({totalTripsVal: val})}
                                />
                            </View>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={styles.settingsSubheader}>
                                How many trips do you want to save by using active transportation each week?
                            </Text>
                        </ListItem>
                        <ListItem>
                            <View style={this.state.textInputStyle}>
                                <TextInput style={styles.settingsInput}
                                    placeholder='Enter some number of trips'
                                    value={String(this.state.activeTripsVal)}
                                    autoFocus={false}
                                    keyboardType = 'default'
                                    underlineColorAndroid='transparent'
                                    keyboardShouldPersistTaps='never'
                                    editable={this.state.editable}
                                    onChangeText = {(val) => this.setState({activeTripsVal: val})}
                                />
                            </View>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={styles.settingsSubheader}>
                                How many trips do you want to save by using public transportation each week?
                            </Text>
                        </ListItem>
                        <ListItem>
                            <View style={this.state.textInputStyle}>
                                <TextInput style={styles.settingsInput}
                                    placeholder='Enter some number of trips'
                                    value={String(this.state.pubTripsVal)}
                                    autoFocus={false}
                                    keyboardType = 'default'
                                    underlineColorAndroid='transparent'
                                    keyboardShouldPersistTaps='never'
                                    editable={this.state.editable}
                                    onChangeText = {(val) => this.setState({pubTripsVal: val})}
                                />
                            </View>
                        </ListItem>
                    </List>
                </Content>
            </Container>
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