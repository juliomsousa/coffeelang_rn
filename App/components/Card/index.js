import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from '..';
import styles from './styles';
import iconsMap from '../Icon/iconsMap';

export default function Card({ title }) {
	return (
		<TouchableOpacity style={styles.wrapper} onPress={() => {}}>
			<View style={styles.container}>
				<View style={styles.headerView}>
					<Text style={styles.titleText}>{title}</Text>
					<Icon icon={iconsMap.AntDesign.barschart} size={20} />
				</View>
				<View style={styles.contentContainer} />
			</View>
		</TouchableOpacity>
	);
}
