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
                            <Text style={styles.settingsHeader}>Developer Information</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.settingsSubheader}>Ember Fairbanks</Text>
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