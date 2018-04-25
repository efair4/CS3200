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
import CameraKitCamera from 'react-native-camera-kit';
import styles from '../styles/Styles';

class AddActivityScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numTrips: "",
            type: 'select',
            carpool: false,
            public: false,
            numPass: '0',
            numDest: '1'
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
                        {/*<Item style={styles.pickerItem}                            >
                            <Label style={styles.pickerLabel}>Did you use public transportation instead of a car?</Label>
                            <Picker
                                style={styles.picker}
                                mode='dropdown'
                                placeholder='Select One'
                                selectedValue={this.state.public}
                                onValueChange={(val) => this.setState({public: val})}
                            >
                                <Picker.Item label='Yes' value={true}/>
                                <Picker.Item label='No' value={false}/>
                            </Picker>
                        </Item>
                        <Item stackedLabel style={styles.addItemItem}>
                            <Label style={styles.addItemScreenText}>If the above don't apply, how many places did you visit on your trip?</Label>
                            <Input
                                placeholder='# of Destinations'
                                keyboardType='numeric'
                                style={styles.addItemInput}
                                borderBottomWidth={1}
                                borderRightWidth={1}
                                borderLeftWidth={1}
                                borderTopWidth={1}
                                borderRadius={5}
                                onChangeText={(val) => this.setState({numTrips: val})}
                            />
                        </Item>
                        <Item style={styles.pickerItem}>
                            <Label style={styles.pickerLabel}>Were there other people in your car who would have driven themselves?</Label>
                            <Picker
                                style={styles.picker}
                                mode='dropdown'
                                placeholder='Select One'
                                selectedValue={this.state.carpool}
                                onValueChange={(val) => this.setState({carpool: val})}
                            >
                                <Picker.Item label='Yes' value={true}/>
                                <Picker.Item label='No' value={false}/>
                            </Picker>
                        </Item>
                        {this.state.carpool ? this._getCarpoolComp(): null}
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
                    placeholder='Number of Passengers'
                    value={this.state.numPass}
                    borderBottomWidth={1}
                    borderRightWidth={1}
                    borderLeftWidth={1}
                    borderTopWidth={1}
                    borderRadius={5}
                    onChangeText={(val) => this.setState({numPass: val})}/>
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
                placeholder='Number of Destinations'
                value={this.state.numDest}
                borderBottomWidth={1}
                borderRightWidth={1}
                borderLeftWidth={1}
                borderTopWidth={1}
                borderRadius={5}
                onChangeText={(val) => this.setState({numDest: val})}/>
            </Item>
        );
    }

    _saveButtonPressed() {
        this.props.dispatchSaveActivity()
    }
}


const mapStateToProps = (state) => {
    return {
        recentActivities: state.recentActivities
    };
}

export default connect(mapStateToProps)(AddActivityScreen);