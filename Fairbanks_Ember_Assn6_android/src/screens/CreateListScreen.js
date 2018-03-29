//This screen displays the user's list of lists.

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    Text,
    TouchableOpacity,
    FlatList,
    TextInput,
    Image,
    View,
    Map
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Styles';
import DoneButton from '../components/DoneButton';
import CancelButton from '../components/CancelButton';
import IconButton from '../components/IconButton';

class CreateListScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listName: null,
            icon: null,
            inputVal: undefined,
            selected: (new Map()),
            imagePaths: [
                require('../images/Batman.jpg'),
                require('../images/images-5.jpg'),
                require('../images/images-34.jpg'),
                require('../images/images-76.jpg'),
                require('../images/images-101.jpg'),
                require('../images/images-10.jpg'),
                require('../images/images-119.jpg'),
                require('../images/images-110.jpg'),
                require('../images/images-97.jpg'),
                require('../images/images-59.jpg'),
                require('../images/images-38.jpg'),
                require('../images/images-0.jpg')]
            }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {backgroundColor: '#2097F4'},
            headerTitleStyle: {color: 'white'},
            headerRight: <DoneButton
                navigation={navigation}
                listName='name' 
                iconName='../images/Batman.jpg'/>,
            headerLeft: <CancelButton navigation={navigation}/>
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    keyboadType='default'
                    placeholder='List Name'
                    keyboardShouldPersistTaps='never'
                    onChangeText={(val) => this.setState({inputVal: val})}
                />
                <Text style={{fontSize: 25, color: 'black'}}>
                    Choose an icon for your list!
                </Text>
                <FlatList 
                    contentContainerStyle={{alignItems: 'center', marginTop: 8}}
                    data={this.state.imagePaths}
                    extraData={this.state}
                    numColumns={3}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this._renderIcon}
                />
            </View>
        );
    }

    _renderIcon = ({item}) => {
        return (
            <IconButton
                selected={!!this.state.selected.get(item.id)}
                icon={item}
                setIcon={() => this._onPressIcon}
            />
        )
    }

    _onPressIcon = (id) => {
        this.setState((state) => {
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); 
            return {selected};
        });
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchNavigate: (screen) => dispatch(navigate(screen))
    };
}

export default connect(null, mapDispatchToProps)(CreateListScreen);