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
            active: undefined
        }
    }
    render() {
        return (
            <Container style={{flexDirection: 'row', backgroundColor: 'white', padding: 10}}>
                <Content>
                        <Item style={styles.pickerItem}>
                            <Label style={styles.pickerLabel}>Did you walk, ride a bike, or use another mode of active transportation instead of a car?</Label>
                            <Picker
                                style={{width: 70, height: 30}}
                                mode='dropdown'
                                placeholder='Select One'
                                selectedValue={this.state.active}
                                onValueChange={(val) => this.setState({active: val})}
                            >
                                <Picker.Item label='Yes' value={true}/>
                                <Picker.Item label='No' value={false}/>
                            </Picker>
                        </Item>
                        <Item stackedLabel>
                            <Label >Did you use public transportation instead of a car?</Label>
                            <Picker
                                style={{alignSelf: 'flex-end', width: 70, height: 30}}
                                mode='dropdown'
                                placeholder='Select One'
                                selectedValue={this.state.active}
                                onValueChange={(val) => this.setState({active: val})}
                            >
                                <Picker.Item label='Yes' value={true}/>
                                <Picker.Item label='No' value={false}/>
                            </Picker>
                        </Item>
                        <Item stackedLabel>
                            <Label>If the above don't apply, how many places did you visit on your trip?</Label>
                            <Input
                                onChangeText={(val) => this.setState({numTrips: val})}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Were there other people in your car who would have driven themselves?</Label>
                            
                        </Item>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recentActivities: state.recentActivities
    };
}

export default connect(mapStateToProps)(AddActivityScreen);