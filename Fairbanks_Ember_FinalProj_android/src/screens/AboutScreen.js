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
            <Container>
                <Content>
                    <List>
                        <ListItem itemHeader>
                            <Text>Developer Information</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Ember Fairbanks</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}