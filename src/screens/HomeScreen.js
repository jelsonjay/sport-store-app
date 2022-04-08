import React, { useState } from 'react';
import {
	View,
	TouchableOpacity,
	Text,
	Image,
	StyleSheet,
	ScrollView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { listItems } from '../../data/data';

function HomeScreen({ navigation }) {
	const [listItem, setListItem] = useState(listItems);

	function lengthDesc(desc) {
		if (desc.length < 19) {
			return desc;
		}
		return `${desc.substring(0, 14)}...`;
	}

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
				<Text style={[styles.bannerText, { color: '#ccc' }]}>Wear</Text>
				<TouchableOpacity
					style={{ position: 'absolute', right: 0, alignItems: 'center' }}
				>
					<MaterialIcons name='filter-list' size={25} color='#000' />
				</TouchableOpacity>
			</View>
			<View style={styles.line}></View>
			<ScrollView>
				<Text style={styles.bannerText}>New Releases</Text>
				<View style={styles.products}>
					{listItem.map(item => (
						<TouchableOpacity
							key={item.key}
							style={styles.productsItems}
							onPress={() => navigation.navigate('DetailsScreen', item)}
						>
							<View>
								<Image source={item.img} style={styles.productImg} />
								<Text style={styles.productText}>{lengthDesc(item.name)}</Text>
								<Text style={styles.productPrice}>£{item.price}</Text>
							</View>
						</TouchableOpacity>
					))}
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
		marginTop: 0,
		height: 285
	},
	img: {
		height: 285
	},
	textContainer: {
		flexDirection: 'row',
		marginVertical: '3%',
		marginHorizontal: '1%'
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
		justifyContent: 'space-around',
		flexWrap: 'wrap'
	},
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

export default HomeScreen;
