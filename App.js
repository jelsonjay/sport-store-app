//import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import Routes from './src/router/Router';

export default function App() {
	let [fontsLoaded] = useFonts({
		Roboto_500Medium
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<StatusBar style='light' backgroundColor='#000' translucent={true} />
			<Routes />
		</>
	);
}
