import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Button() {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.btnContent}>
				<Text style={styles.btnTitle}>Buy Now</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnContent: {
		width: '95%',
		height: 50,
		backgroundColor: '#46b4d9',
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: '5%'
	},
	btnTitle: {
		fontSize: 25,
		color: '#fff',
		fontFamily: 'Roboto_500Medium',
		fontWeight: '900'
	}
});
