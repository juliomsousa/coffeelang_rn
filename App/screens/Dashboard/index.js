import React from 'react';
import { View, Button } from 'react-native';

import styles from './styles';
import { Card, Player, Text } from '../../components';

export default function Dashboard({ navigation }) {
	const page = 'Good evening';
	return (
		<View style={styles.container}>
			<Text fontWeight="bold" style={styles.title}>
				{page}
			</Text>
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

			<Text>Test custom font Regular</Text>
			<Text fontWeight="medium">Test custom font Medium</Text>
			<Text fontWeight="bold">Test custom font Bold</Text>

			<Player />
		</View>
	);
}
