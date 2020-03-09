import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 80,
		backgroundColor: '#CCC',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		borderRadius: 100 / 8,
	},
	infoContainer: {
		flexDirection: 'row',
		height: 60,
		alignItems: 'center',
	},
	songAvatar: {
		height: 60,
		width: 60,
		borderRadius: 60 / 2,
		backgroundColor: '#DDD',
		alignItems: 'center',
		justifyContent: 'center',
	},
	songInfo: {
		marginHorizontal: 10,
	},
	songTitle: {
		fontWeight: 'bold',
	},
	songArtist: {
		fontSize: 12,
	},
	controlContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	prevNext: {
		backgroundColor: '#999',
		height: 30,
		width: 30,
		borderRadius: 30 / 2,
		margin: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	playPause: {
		backgroundColor: '#999',
		height: 40,
		width: 40,
		borderRadius: 40 / 2,
		margin: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default styles;
