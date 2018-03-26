//StyleSheet for the components of the Tapit app
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 5,
        borderColor: 'purple'
    },
    topBar: {
        flex: 1,
        flexDirection: 'row',        
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'darkorange',
        borderBottomWidth: 5,
        borderBottomColor: 'purple'
    },
    instructions: {
        fontSize: 20,
        fontFamily: 'sans-serif',
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10
    },
    gridView: {
        flex: 6,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: 'white'
    },
    scoreBar: {
        flex: 1
    },
    label: {
        fontSize: 25,
        fontFamily: 'sans-serif',
        textAlign: 'center',
        color: 'black',
        textDecorationLine: 'underline'
    },
    value: {
        fontSize: 23,
        fontFamily: 'sans-serif',
        textAlign: 'center',
        color: 'black',
    },
    title: {
        fontSize: 70,
        fontFamily: 'sans-serif-bold',
        color: 'purple',
        textAlign: 'center',
        margin: 20
    },
    playButton: {
        backgroundColor: 'darkorange',
        margin: 20,
        padding: 2,
        borderRadius: 30,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gridButton: {
        margin: 3,
        backgroundColor: 'blue',
        height: 40,
        width: 40,
        borderRadius: 40,
        borderWidth: 10,
        borderColor: 'black'
    },
    buttonText: {
        fontSize: 20,
        color: 'black'
	},
});