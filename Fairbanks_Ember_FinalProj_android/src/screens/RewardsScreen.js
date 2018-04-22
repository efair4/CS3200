import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    Text,
    TouchableOpacity,
    FlatList,
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
import { ProgressCircle } from 'react-native-svg-charts';
import GLOBALCOLORS from '../utils/Colors';

import styles from '../styles/Styles';

class RewardsScreen extends Component {
    render() {
        return (
            <Content>
                <List>
                    <ListItem>
                        <Left>
                            <Image source={require('../images/trophy1.jpg')}>
                                <ProgressCircle
                                    style={{height: 30}}
                                    progress={(this.props.tripsSaved/10) <= 1 ? this.props.tripsSaved/10 : 1}
                                    progressColor={GLOBALCOLORS.PINK}
                                />
                            </Image>
                        </Left>
                        <Body>
                            <Text>10 Trips Saved</Text>
                        </Body>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tripsSaved: state.tripsSaved
    };
}

export default connect(mapStateToProps)(RewardsScreen);