import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    Text,
    TouchableOpacity,
    FlatList,
    ImageBackground,
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
            <Content style={{backgroundColor: 'white'}}>
                <List>
                    <ListItem>
                        <Left>
                            <ImageBackground style={{alignSelf: 'center', marginLeft: 25, width: 30}} source={require('../images/trophy.png')}>
                                <ProgressCircle
                                    style={{height: 75, width: 75, alignSelf: 'center'}}
                                    progress={(this.props.tripsSaved/10) <= 1 ? this.props.tripsSaved/10 : 1}
                                    progressColor={GLOBALCOLORS.PINK}
                                    strokeWidth={5}
                                />
                            </ImageBackground>
                        </Left>
                        <Body>
                            <Text style={styles.rewardItemText}>10 Trips Saved</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <ImageBackground style={{alignSelf: 'center', marginLeft: 25, width: 30}} source={require('../images/trophy.png')}>
                                <ProgressCircle
                                    style={{height: 75, width: 75, alignSelf: 'center'}}
                                    progress={(this.props.tripsSaved/50) <= 1 ? this.props.tripsSaved/50 : 1}
                                    progressColor={GLOBALCOLORS.PINK}
                                    strokeWidth={5}
                                />
                            </ImageBackground>
                        </Left>
                        <Body>
                            <Text style={styles.rewardItemText}>50 Trips Saved</Text>
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