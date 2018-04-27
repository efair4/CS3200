import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Alert,
    View
} from 'react-native';
import {
    Container,
	Content,
	List,
    ListItem,
    Form,
    Item, 
    Input, 
    Label,
    Picker
} from 'native-base';
//import CameraKitCamera from 'react-native-camera-kit';
import styles from '../styles/Styles';
import { Activity } from '../models/Activity';
import {addActivity} from '../actions/actions';

class AddActivityScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'select',
            numPass: '0',
            numDest: '1',
            photos: []
        }
    }

    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: null,
            headerRight: <TouchableOpacity 
                            style={{margin: 10}}
                            onPress={() => navigation.goBack()}>
                            <Text style={{color: 'red', fontWeight: '400', fontSize: 20}}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
        }
    }
    render() {
        return (
            <Container style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
                <Content>
                        <Item style={styles.pickerItem}>
                            <Label style={styles.pickerLabel}>How did you get to your trip destination?</Label>
                            <Picker
                                style={styles.picker}
                                mode='dropdown'
                                placeholder='Select One'
                                selectedValue={this.state.type}
                                onValueChange={(val) => this.setState({type: val})}
                            >
                                <Picker.Item label='Select One' value='select'/>
                                <Picker.Item label='Walking, biking, etc.' value='active'/>
                                <Picker.Item label='Public Transportation' value='public'/>
                                <Picker.Item label='Car' value='car'/>
                            </Picker>
                        </Item>
                        {this.state.type == 'car' ? this._getCarpoolComp(): null}
                        {this.state.type == 'car' ? this._getTripchainComp(): null}
                        <Text style={styles.addItemScreenText}>
                            Add pictures from your trip! (Optional)
                        </Text>
                        {/*<CameraKitCamera
                            ref={cam => this.camera = cam}
                            style={{flex: 1, backgroundColor: 'white'}}
                            cameraOptions={{
                                flashMode: 'auto',
                                focusMode: 'on',
                                zoomMode: 'on',
                                ratioOverlay: '1:1'
                            }}/>
                        */}
                </Content>
                    <TouchableOpacity style={this.state.type == 'select' ? styles.disabledButton : styles.saveActivityButton}
                        onPress={() => this.state.type == 'select' ? null : this._saveButtonPressed()}
                    >
                        <Text style={styles.saveActivityText}>
                            Save!
                        </Text>
                    </TouchableOpacity>
            </Container>
        );
    }

    _getCarpoolComp() {
        return (
            <Item stackedLabel style={styles.addItemItem}>
                <Label style={styles.addItemScreenText}>How many passengers were with you that would have otherwise driven themselves?
                    If you were alone or were driving your own children then leave this value at 0.    
                </Label>
                <Input 
                    keyboardType='numeric'
                    style={styles.addItemInput}
                    placeholder='Passengers'
                    value={this.state.numPass}
                    borderBottomWidth={1}
                    borderRightWidth={1}
                    borderLeftWidth={1}
                    borderTopWidth={1}
                    borderRadius={5}
                    onChangeText={(val) => this.setState({numPass: val})}
                    onSubmitEditing={(val) => this.state.numPass != '' ? null : this.setState({numPass: '0'})}
                    />
            </Item>
        );
    }

    _getTripchainComp() {
        return (
            <Item stackedLabel style={styles.addItemItem}>
            <Label style={styles.addItemScreenText}>
                How many places did you visit during your trip? If you went to the store and then to the post office
                before returning ome, then you'd enter a value of 2.
            </Label>
            <Input 
                keyboardType='numeric'
                style={styles.addItemInput}
                placeholder='Destinations'
                value={this.state.numDest}
                borderBottomWidth={1}
                borderRightWidth={1}
                borderLeftWidth={1}
                borderTopWidth={1}
                borderRadius={5}
                onChangeText={(val) => this.setState({numDest: val})}
                onSubmitEditing={(val) => this.state.numDest != '' ? null : this.setState({numDest: '1'})}
                />
            </Item>
        );
    }

    _saveButtonPressed() {
        var type = this.state.type;
        var numTrips = 1
        if (this.state.type == 'car') {
            if (this.state.numPass >= this.state.numDest) {
                type = 'carpool';
                numTrips = this.state.numPass;
            }
            else {
                type = 'tripchain';
                numTrips = this.state.numDest;
            }
        }
        this.props.dispatchAddActivity(new Activity(type, numTrips, this.state.photos));
        this.props.navigation.goBack();
    }
}


const mapStateToProps = (state) => {
    return {
        recentActivities: state.recentActivities
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchAddActivity: (activity) => dispatch(addActivity(activity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddActivityScreen);