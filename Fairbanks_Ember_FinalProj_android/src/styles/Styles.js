import { StyleSheet } from 'react-native';
import GLOBALCOLORS from "../utils/Colors";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	},
	homeContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 10
	},
	settingsContainer: {
		flex: 1, 
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding: 10
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
		fontSize: 20
	},
	saveButtonText: {
		color: GLOBALCOLORS.DIGITAL,
		fontFamily: 'sans-serif-bold',
		fontSize: 20
	},
	settingsInput: {
		fontSize: 25,
		width: '100%',
		color: 'black'
	}
});