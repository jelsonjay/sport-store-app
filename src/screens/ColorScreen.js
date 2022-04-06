import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

export default function ColorScreen({ color }) {
	return <View style={[styles.container, { backgroundColor: color }]}></View>;
}

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('window').width * 0.05,
		height: Dimensions.get('window').width * 0.05,
		marginHorizontal: '2.5%',
		elevation: 5
	}
});
