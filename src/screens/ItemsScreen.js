import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { listItems } from '../../data/data';

export default function ItemsScreen({ onClick }) {
	const [listItem, setListItem] = useState(listItems);

	function lengthDesc(desc) {
		if (desc.length < 19) {
			return desc;
		}
		return `${desc.substring(0, 14)}...`;
	}

	return (
		<TouchableOpacity style={styles.productsItems} onPress={onClick}>
			{listItem.map(item => (
				<View key={item.key}>
					<Image source={item.img} style={styles.productImg} />
					<Text style={styles.productText}>{lengthDesc(item.name)}</Text>
					<Text style={styles.productPrice}>£{item.price}</Text>
				</View>
			))}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	productsItems: {
		paddingVertical: '5%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center'
	},
	productImg: {
		width: 175,
		height: 175,
		margin: 8
	},
	productText: {
		fontSize: 20,
		fontFamily: 'Roboto_500Medium',
		textAlign: 'center'
	},
	productPrice: {
		fontSize: 18,
		opacity: 0.4,
		textAlign: 'center'
	}
});
