import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';
import { Card, Player } from '../../components';

export default function Dashboard({ navigation }) {
	const page = 'Dashboard';
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{page}</Text>
			<Button
				color="#AAA"
				title="Reader"
				onPress={() => navigation.navigate('Reader')}
			/>
			<View style={{ flexDirection: 'row' }}>
				<Card title="Lorem" />
				<Card title="Lorem" />
			</View>
			<Card title="Lorem" />
			<Player />
		</View>
	);
}
