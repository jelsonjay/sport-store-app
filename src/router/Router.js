import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

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
					options={{
						headerRight: () => {
							<TouchableOpacity>
								<Feather name='shopping-cart' size={25} color='#000' />
							</TouchableOpacity>;
						}
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Route;
