import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// routes
import { View } from 'react-native';
import { Dashboard, Profile, Reader, Settings } from './screens';

const Tab = createBottomTabNavigator();

function Home() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Dashboard" component={Dashboard} />
			<Tab.Screen name="Profile" component={Profile} />
			<Tab.Screen name="Settings" component={Settings} />
		</Tab.Navigator>
	);
}

const Stack = createStackNavigator();

function AppRouter() {
	const isLoading = useSelector(state => state.startup.loading);

	if (isLoading)
		return <View style={{ flex: 1, backgroundColor: '#445876' }} />;

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Reader" component={Reader} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppRouter;
