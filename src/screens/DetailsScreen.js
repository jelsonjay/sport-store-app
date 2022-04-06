import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import ColorScreen from './ColorScreen';
import SizeButton from './SizeButton';

function DetailsScreen({ navigation }) {
	return (
		<ScrollView style={styles.container}>
			<Image
				source={require('../../assets/images/adidas.png')}
				style={styles.detailsImg}
				resizeMode='cover'
			/>
			<View>
				<View>
					<Text style={styles.detailsName}>Nike Shoes</Text>
				</View>
				<View>
					<Text style={styles.detailsPrice}>£125.99</Text>
				</View>

				<View style={styles.colorWrap}>
					<ColorScreen color='#121212' />
					<ColorScreen color='#46b4d9' />
					<ColorScreen color='#9410a0' />
					<ColorScreen color='#fb6e53' />
				</View>
				<View style={{ flexDirection: 'row', width: '100%' }}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<SizeButton bgColor='#121212' color='#fff'>
							35
						</SizeButton>
						<SizeButton>38</SizeButton>
						<SizeButton>45</SizeButton>
						<SizeButton>25</SizeButton>
						<SizeButton>44</SizeButton>
						<SizeButton>55</SizeButton>
						<SizeButton>15</SizeButton>
						<SizeButton>32</SizeButton>
						<SizeButton>47</SizeButton>
						<SizeButton>42</SizeButton>
					</ScrollView>
				</View>
				<View style={styles.textContent}>
					<Text>Nike Shoes</Text>
					<Text>
						The Trefoil has been standing out since its 1972 debut. This hoodie
						celebrates its iconic style with a Trefoil logo front and centre.
					</Text>
					<Text></Text>
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
		paddingHorizontal: '5%'
	},
	detailsPrice: {
		fontSize: 25,
		fontFamily: 'Roboto_500Medium',
		opacity: 0.4,
		paddingHorizontal: '5%'
	},
	colorWrap: {
		flexDirection: 'row',
		marginVertical: '8%',
		paddingHorizontal: '5%'
	}
});

export default DetailsScreen;
