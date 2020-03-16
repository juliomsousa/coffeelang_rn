import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from '..';
import iconsMap from '../Icon/iconsMap';

import styles from './styles';

export default function Player() {
	return (
		<View style={styles.container}>
			<View style={styles.infoContainer}>
				<View style={styles.songAvatar}>
					<Icon icon={iconsMap.AssetIcons.music} size={20} />
				</View>
				<View style={styles.songInfo}>
					<Text style={styles.songTitle}>Giant Steps</Text>
					<Text style={styles.songArtist}>John Coltrane</Text>
				</View>
			</View>
			<View style={styles.controlContainer}>
				<View style={styles.prevNext}>
					<Icon icon={iconsMap.AssetIcons.back} size={16} />
				</View>
				<View style={styles.playPause}>
					<Icon icon={iconsMap.AssetIcons.play} size={16} />
				</View>
				<View style={styles.prevNext}>
					<Icon icon={iconsMap.AssetIcons.next} size={16} />
				</View>
			</View>
		</View>
	);
}
