import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	wrapper: { flex: 1 },
	container: {
		padding: 14,
		borderRadius: 20,
		backgroundColor: '#BBB',
	},
	headerView: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	titleText: {
		fontSize: 14,
		fontWeight: '600',
	},
	contentContainer: {
		marginTop: 10,
		height: 100,
		width: '100%',
		backgroundColor: '#AAA',
	},
});

export default styles;
