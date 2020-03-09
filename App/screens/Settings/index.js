import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Settings({ navigation }) {
	const page = 'Settings';
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{page}</Text>
		</View>
	);
}
