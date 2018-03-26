//StyleSheet for the Movie Mania application
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
        backgroundColor: 'white',
        padding: 10
    },
    searchItem: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 300,
        margin: 10,
    },
    posterImage: {
        flex: 1,
        height: 100,
        aspectRatio: 1,
        alignSelf: 'center',
        margin: 5
    },
	title: {
		fontSize: 30,
		textAlign: 'center',
        marginTop: 0,
        color: 'black'
    },
    instructions: {
        fontSize: 26,
        margin: 5,
        color: 'black',
        alignSelf: 'flex-start'
    },
    waitMessage: {
        fontSize: 45,
        marginTop: 150,
        color: 'black',
        alignSelf: 'center'
    },
    listItem: {
        fontSize: 23,
        margin: 5,
        color: 'black',
        textAlign: 'left',
    },
    horizontalItem: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 170,
        height: 410,
        margin: 5,
        marginTop: 10
    },
    horizontalImage: {
        height: 90,
        alignSelf: 'center',
        aspectRatio: 1,
        margin: 5,
    },
    horizontalText: {
        fontSize: 17,
		textAlign: 'center',
        marginTop: 5,
        color: 'black'
    },
    regularText: {
        fontSize: 17,
		textAlign: 'left',
        marginTop: 5,
        color: 'black'
    },
    searchTitle: {
        fontSize: 20,
        fontFamily: 'sans-serif-bold',
		textAlign: 'left',
        marginTop: 5,
        color: 'black'
    },
    scrollView: {
    },
    scrollContent: {
        alignSelf: 'stretch',
        margin: 5
    },
    textInput: {
        width: '100%',
        fontSize: 20,
        textAlign: 'left',
        fontFamily: 'sans-serif-bold',
        color: 'black'
    },
});
