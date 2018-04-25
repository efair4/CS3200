import { StyleSheet } from 'react-native';
import GLOBALCOLORS from "../utils/Colors";

const FONT = 'sans-serif-bold';

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
		fontFamily: FONT,
		fontSize: 20,
		color: 'black'
	},
	editButtonText: {
		color: 'black',
		fontFamily: FONT,
		fontWeight: '400',
		fontSize: 20
	},
	saveButtonText: {
		color: 'white',
		fontFamily: FONT,
		fontSize: 20,
		fontWeight: '500'
	},
	cancelButtonText: {
		color: 'red',
		fontFamily: FONT,
		fontSize: 20,
		fontWeight: '400'
	},
	editSettingsInputView: {
		width: '100%',
		backgroundColor: 'white',
		borderRadius: 3,
		borderWidth: 2, 
		borderColor: 'black',
	},
	noEditSettingsInputView: {
		width: '100%',
		borderBottomWidth: 0,
		borderBottomColor: 'black'
	},
	settingsInput: {
		fontSize: 18,
		width: '100%',
		color: 'black',
		textAlign: 'right'
	},
	settingsHeader: {
		fontSize: 21,
		fontWeight: '500',
		color: 'black'
	},
	settingsSubheader: {
		fontSize: 19,
		color: 'black'
	},
	rewardItemText: {
		marginLeft: -50,
		fontSize: 20,
		color: 'black'
	},
	scrollContentView: {
		alignSelf: 'stretch'
	},
	pickerItem: {
		height: 85,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10
	},
	pickerLabel: {
		marginBottom: 10,
		alignSelf: 'flex-end',
		fontSize: 20,
		color: 'black',
		fontFamily: FONT
	},
	picker: { 
		width: 200, 
		height: 30
	},
	addItemScreenText: {
		fontSize: 20,
		color: 'black',
		fontFamily: FONT,
	},
	addItemInput: {
		fontSize: 20,
		width: '45%',
		color: 'black',
		textAlign: 'right',
		alignSelf: 'flex-end'
	},
	addItemItem: {
		height: 110,
		marginLeft: 10, 
		marginRight: 10
	},
	saveActivityButton: {
		width: '50%',
		height: 55,
		backgroundColor: GLOBALCOLORS.YELLOW,
		justifyContent: 'center',
		borderRadius: 6,
		padding: 5,
		margin: 10
	},
	saveActivityText: {
		textAlign: 'center',
		alignSelf: 'center',
		fontFamily: FONT,
		fontSize: 30,
		color: 'black'
	},
	disabledButton: {
		width: '50%',
		height: 55,
		backgroundColor: 'lightgray',
		justifyContent: 'center',
		borderRadius: 6,
		padding: 5,
		margin: 10
	},
});