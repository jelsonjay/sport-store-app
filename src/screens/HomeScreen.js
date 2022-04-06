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
import ItemsScreen from './ItemsScreen';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View style={styles.banner}>
				<Image
					style={styles.img}
					source={require('../../assets/images/banner.jpg')}
				/>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.bannerText}>Sport</Text>
				<Text style={[styles.bannerText, { color: '#ccc' }]}>.</Text>
				<Text style={[styles.bannerText, { color: '#ccc' }]}>Wear</Text>
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
					<ItemsScreen onClick={() => navigation.navigate('DetailsScreen')} />
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
	}
});

export default HomeScreen;
