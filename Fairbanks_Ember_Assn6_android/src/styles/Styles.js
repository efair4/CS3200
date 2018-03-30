//Styles file for the Grocerying App
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 10,
    },
    message: {
        fontSize: 40,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 70
    },
    chooseIconImage: {
        margin: 0
    },
    textInput: {
        fontSize: 30,
    },
    listItem: {
        fontSize: 23,
        margin: 5,
        color: 'black',
        textAlign: 'left',
    },
    doneButton: {
        fontSize: 20,
        fontFamily: 'sans-serif-bold',
        fontWeight: '500',
        marginRight: 15,
        color: 'black'
    },
    cancelButton: {
        fontSize: 20,
        fontFamily: 'sans-serif-bold',
        fontWeight: '300',
        marginLeft: 15,
        color: 'black'
    }
});