import React, {Component} from 'react';
import {
    Platform,
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
    Header,
    ListItem,
    Text,
    Right,
    Left,
    Body
} from 'native-base';
import styles from '../styles/Styles';

export default class AboutScreen extends Component {
    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text style={styles.settingsHeader}>App and Developer Information</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.settingsSubheader}>
                                The Trip Tracker app was created by Ember Fairbanks to help
                                 encourage motorists to decrease their number of personal car trips.
                            </Text>
                            <Text style={styles.settingsSubheader}>
                                Users can log their saved trips and those trips are then placed into one of 
                                four categories:
                                1. Active Transportation - walking, riding a bike, or using another form of physical
                                activity to reach your destination.
                                2. Public Transportation - using a city bus or train system.
                                3. Carpooling - driving others with you who would otherwise have driven their own vehicle.
                                4. Trip Chaining - going to all necessary destinations in one trip instead of going to each 
                                place separately and driving home in between.
                            </Text>
                            <Text style={styles.settingsSubheader}>
                                We hope you'll enjoy using this app and that it will help you make
                                a concious effort to reduce your car trips!
                            </Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={styles.settingsHeader}>Trophy Information</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.settingsSubheader}>You can earn several trophies from logging your saved trips! Head over to the 
                                Trophies tab to see how close you are to getting each one! There are trophies for your
                                10th and 50th trips saved, your first use of public transportation, 5th photo uploaded,
                                and more on the way! Now get out there and start saving trips so you can improve the air
                                quality and breathe easy!</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}