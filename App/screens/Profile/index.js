import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Profile({ navigation }) {
	const page = 'Profile';
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{page}</Text>
		</View>
	);
}
