import React from 'react';
import { View, Text, Image } from 'react-native';
import icons from '../../assets/images/icons';
import styles from './styles';

export default function Player() {
	return (
		<View style={styles.container}>
			<View style={styles.infoContainer}>
				<View style={styles.songAvatar}>
					<Image source={icons.music} style={{ height: 16, width: 16 }} />
				</View>
				<View style={styles.songInfo}>
					<Text style={styles.songTitle}>Giant Steps</Text>
					<Text style={styles.songArtist}>John Coltrane</Text>
				</View>
			</View>
			<View style={styles.controlContainer}>
				<View style={styles.prevNext}>
					<Image source={icons.back} style={{ height: 16, width: 16 }} />
				</View>
				<View style={styles.playPause}>
					<Image source={icons.play} style={{ height: 16, width: 16 }} />
				</View>
				<View style={styles.prevNext}>
					<Image source={icons.next} style={{ height: 16, width: 16 }} />
				</View>
			</View>
		</View>
	);
}
