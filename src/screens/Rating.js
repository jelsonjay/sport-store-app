import { View, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
const numStars = 5;

export default class Rating extends React.Component {
	state = {
		rating: 2
	};

	rate = start => {
		this.setState({ rating: start });
	};
	render() {
		let stars = [];
		for (let i = 1; i <= numStars; i++) {
			stars.push(
				<TouchableOpacity
					key={i}
					onPress={() => {
						this.rate(i);
					}}
				>
					<Animated.View>
						<Star filled={i <= this.state.rating ? true : false} />
					</Animated.View>
				</TouchableOpacity>
			);
		}

		return (
			<View style={styles.container}>
				<View style={{ flexDirection: 'row' }}>{stars}</View>
			</View>
		);
	}
}

class Star extends React.Component {
	render() {
		return (
			<FontAwesome
				name={this.props.filled === true ? 'star' : 'star-o'}
				color='yellow'
				size={25}
				style={styles.containerStar}
			/>
		);
	}
}

const styles = StyleSheet.create({
	continue: {
		color: '#ecce05'
	},
	containerStar: {
		marginHorizontal: 6
	}
});
