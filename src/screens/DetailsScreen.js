import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import ColorScreen from './ColorScreen';
import SizeButton from './SizeButton';
import Button from './Button';
import Footer from './Footer';
import Rating from './Rating';

function DetailsScreen({ route }) {
	return (
		<ScrollView style={styles.container}>
			<Image
				source={route.params.img}
				style={styles.detailsImg}
				resizeMode='cover'
			/>
			<View>
				<View>
					<Text style={styles.detailsName}>{route.params.name}</Text>
				</View>
				<View>
					<Text style={styles.detailsPrice}>£{route.params.price}</Text>
				</View>
				<Text
					style={{ fontSize: 18, marginVertical: '2%', marginHorizontal: 8 }}
				>
					Colours available
				</Text>
				<View style={styles.colorWrap}>
					<ColorScreen color='#121212' />
					<ColorScreen color='#46b4d9' />
					<ColorScreen color='#9410a0' />
					<ColorScreen color='#fb6e53' />
				</View>
				<Text
					style={{ fontSize: 18, marginVertical: '3%', marginHorizontal: 8 }}
				>
					Available sizes
				</Text>
				<View style={{ flexDirection: 'row', width: '100%' }}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<SizeButton bgColor='#121212' color='#fff'>
							L
						</SizeButton>
						<SizeButton>XS</SizeButton>
						<SizeButton>S</SizeButton>
						<SizeButton>M</SizeButton>
						<SizeButton>XL</SizeButton>
						<SizeButton>2XL</SizeButton>
						<SizeButton>XXL</SizeButton>
						<SizeButton>3XL</SizeButton>
					</ScrollView>
				</View>
				<View style={styles.textContent}>
					<Text style={styles.title}>Nike Shoes</Text>
					<Text style={styles.textContent}>{route.params.desc}</Text>
					<Text style={styles.textList}>- Reviews:</Text>
					<Rating />

					<Button />

					<View style={styles.line}></View>

					<Footer />
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#fff'
	},
	detailsImg: {
		width: '100%'
	},
	detailsName: {
		fontSize: 25,
		fontWeight: 'bold',
		fontFamily: 'Roboto_500Medium',
		paddingHorizontal: '2%',
		marginVertical: '2%'
	},
	detailsPrice: {
		fontSize: 16,
		fontFamily: 'Roboto_500Medium',
		opacity: 0.4,
		paddingHorizontal: '2%'
	},
	colorWrap: {
		flexDirection: 'row',
		marginVertical: '2%',
		paddingHorizontal: '5%'
	},
	textContent: {
		fontSize: 16,
		lineHeight: 25,
		marginVertical: '3%',
		paddingHorizontal: '3%'
	},
	title: {
		fontSize: 22,
		lineHeight: 25,
		fontFamily: 'Roboto_500Medium'
	},
	textList: {
		fontSize: 16,
		lineHeight: 25,
		fontFamily: 'Roboto_500Medium'
	},
	line: {
		borderBottomColor: '#ccc',
		borderBottomWidth: 2,
		marginVertical: '5%'
	}
});

export default DetailsScreen;
