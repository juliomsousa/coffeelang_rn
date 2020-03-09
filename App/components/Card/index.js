import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles';
// import { AntDesign } from '@expo/vector-icons';

export default function Card({ title }) {
	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<View style={styles.headerView}>
					<Text style={styles.titleText}>{title}</Text>
					<TouchableOpacity onPress={() => {}}>
						{/* <AntDesign name={'barschart'} size={20} /> */}
						<View style={{ height: 20, width: 20, backgroundColor: '#000' }} />
					</TouchableOpacity>
				</View>
				<View style={styles.contentContainer} />
			</View>
		</View>
	);
}
