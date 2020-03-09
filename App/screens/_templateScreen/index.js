import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function _Screen({ navigation }) {
	const page = '_Screen';
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{page}</Text>
		</View>
	);
}
