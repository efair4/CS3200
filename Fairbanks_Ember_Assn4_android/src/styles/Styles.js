//StyleSheet for the components of the Calculator app
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
    infoContainer: {
        flex: 1,
		margin: 15,
		backgroundColor: 'transparent',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
    },
    imageContainer: {
        position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%'
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    textInput: {
        alignSelf: 'flex-end',
        width: 350,
        fontSize: 40,
        textAlign: 'right',
        fontFamily: 'sans-serif-bold'
    },
    scrollView: {
    },
    scrollContent: {
        alignSelf: 'stretch',
    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%'
    }
});