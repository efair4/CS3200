import { StyleSheet } from 'react-native';
import GLOBALCOLORS from "../utils/Colors";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		backgroundColor: 'white'
	},
	homeContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 10,
		backgroundColor: 'white'
	},
	settingsScrollView: {
		padding: 15,
		backgroundColor: 'white'
	},
	settingsInfoText: {
		fontSize: 25,
		color: 'black',
		textAlign: 'left'
	},
	infoText: {
		fontSize: 30,
		color: 'black',
		textAlign: 'center'
	},
	addActivityButton: {
		width: '50%',
		height: 65,
		backgroundColor: GLOBALCOLORS.YELLOW,
		justifyContent: 'center',
		borderRadius: 6,
		padding: 5,
		margin: 10
	},
	addActivityText: {
		textAlign: 'center',
		alignSelf: 'center',
		fontFamily: 'sans-serif-bold',
		fontSize: 20,
		color: 'black'
	},
	editButtonText: {
		color: 'black',
		fontFamily: 'sans-serif-bold',
		fontWeight: '400',
		fontSize: 20
	},
	saveButtonText: {
		color: 'white',
		fontFamily: 'sans-serif-bold',
		fontSize: 20,
		fontWeight: '500'
	},
	cancelButtonText: {
		color: 'red',
		fontFamily: 'sans-serif-bold',
		fontSize: 20,
		fontWeight: '400'
	},
	editSettingsInputView: {
		width: '100%',
		backgroundColor: 'lightgray',
		borderRadius: 3,
		borderWidth: 2, 
		borderColor: 'black',
		marginTop: 5,
		marginBottom: 10
	},
	noEditSettingsInputView: {
		width: '100%',
		marginTop: 5,
		marginBottom: 10,
		borderBottomWidth: 2,
		borderBottomColor: 'black'
	},
	settingsInput: {
		fontSize: 20,
		width: '100%',
		color: 'black',
	},
	settingsHeader: {
		fontSize: 23,
		textDecorationLine: 'underline',
		fontWeight: '500',
		color: 'black'
	},
	settingsSubheader: {
		fontSize: 20,
		color: 'black'
	},
	scrollContentView: {
		alignSelf: 'stretch'
	}
});