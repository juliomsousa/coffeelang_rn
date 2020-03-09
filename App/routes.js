import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// routes
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
