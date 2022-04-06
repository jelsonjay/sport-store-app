import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function SizeButton(props) {
	return (
		<View
			style={[styles.container, { backgroundColor: props.bgColor || '#fff' }]}
		>
			<Text style={[styles.sizeNumber, { color: props.color || '#121212' }]}>
				{props.children}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 70,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: '#ccc',
		borderWidth: 3,
		marginHorizontal: 10
	},
	sizeNumber: {
		color: '#fff',
		fontSize: 20,
		textAlign: 'center',
		textAlignVertical: 'center'
	}
});
