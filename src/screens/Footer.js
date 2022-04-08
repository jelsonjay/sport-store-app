import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import ItemsScreen from './ItemsScreen';

export default function Footer(navigation) {
	return (
		<View style={styles.container}>
			<Text style={styles.footerTitle}>You Might Also Like</Text>
			<View style={{ flexDirection: 'row' }}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View>
						<ItemsScreen />
					</View>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	footerTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		fontFamily: 'Roboto_500Medium'
	}
});
