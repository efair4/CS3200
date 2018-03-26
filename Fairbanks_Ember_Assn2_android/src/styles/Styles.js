//StyleSheet for the components of the Counter app
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
	counterView: {
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
        borderWidth: 5,
		borderColor: 'purple',
		width: 300,
		height: 150
	},
    title: {
        fontSize: 100,
        fontFamily: 'sans-serif-condensed',
        color: 'purple',
        textAlign: 'center',
        margin: 0
    },
    counter: {
        fontSize: 120,
        fontFamily: 'sans-serif-medium',
        textAlign: 'center',
        marginTop: 0,
        marginBottom: 5,
        color: 'purple',
    },
    button: {
        backgroundColor: 'purple',
        padding: 5,
        margin: 10,
        borderRadius: 20,
        width: 150,
        borderWidth: 5,
        borderColor: 'black'
    },
    buttonText: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
	},
});