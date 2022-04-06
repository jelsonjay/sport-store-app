import React from 'react';
import {
	View,
	TouchableOpacity,
	Text,
	Image,
	StyleSheet,
	ScrollView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
function HomeScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.banner}>
				<Image
					style={styles.img}
					source={require('../../assets/images/banner.jpg')}
				/>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.bannerText}>Shoes</Text>
				<Text style={[styles.bannerText, { color: '#ccc' }]}>.</Text>
				<Text style={[styles.bannerText, { color: '#ccc' }]}>Male</Text>
				<TouchableOpacity
					style={{ position: 'absolute', right: 0, alignItems: 'center' }}
				>
					<MaterialIcons name='filter-list' size={25} color='#000' />
				</TouchableOpacity>
			</View>
			<View style={styles.line}></View>
			<ScrollView>
				<Text style={styles.bannerText}>New Features</Text>

				<View style={styles.products}>
					<View style={styles.productsItems}></View>
					<View style={styles.productsItems}></View>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#fff'
	},
	banner: {
		marginTop: 8
	},
	img: {},
	textContainer: {
		flexDirection: 'row',
		marginVertical: '5%',
		marginHorizontal: '5%'
	},
	bannerText: {
		fontSize: 28,
		fontFamily: 'Roboto_500Medium',
		marginHorizontal: '2%'
	},
	line: {
		borderBottomColor: '#ccc',
		borderBottomWidth: 2
	},
	products: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	productsItems: {
		width: 90,
		height: 75,
		backgroundColor: 'skyblue'
	}
});

export default HomeScreen;
