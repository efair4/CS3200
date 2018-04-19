import { StyleSheet } from 'react-native';
// import TAN from '../utils/Colors';
// import ORANGE from '../utils/Colors';
// import BROWN from '../utils/Colors';
// import YELLOW from '../utils/Colors';
// import PURPLE from '../utils/Colors';
// import PINK from '../utils/Colors';
// import SPOT from '../utils/Colors';
// import PROCESS from '../utils/Colors';
// import DIGITAL from '../utils/Colors';

const TAN = '#f1e3c5';
const ORANGE = '#d4451d';
const BROWN = '#663334';
const YELLOW = '#ffce71';
const PURPLE = '#6d276a';
const PINK = '#e7417a';

const SPOT = '#00778B';
const PROCESS = '#00cfc4';
const DIGITAL = '#008da8';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		margin: 10
	},
	homeContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	addActivityButton: {
		width: '50%',
		height: 50,
		backgroundColor: YELLOW,
		justifyContent: 'center',
		borderRadius: 6
	},
	addActivityText: {
		textAlign: 'center',
		alignSelf: 'center',
		fontFamily: 'sans-serif-bold'
	},
});