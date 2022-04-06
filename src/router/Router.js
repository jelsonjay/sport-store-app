import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

function Route() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='HomeScreen'
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='DetailsScreen'
					component={DetailsScreen}
					options={{ headerShown: true }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Route;
