import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import H1 from "../components/ui/H1"
import colors from "../style/colors"

type Props = {}

const GameOverScreen: React.FC<Props> = ({}) => {
	return (
		<View style={styles.container}>
			<H1 style={styles.mainTitle}>
				<Text style={styles.titleO}>G</Text>ame{" "}
				<Text style={styles.titleO}>O</Text>ver!
			</H1>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/success.png")}
				></Image>
			</View>
		</View>
	)
}

export default GameOverScreen

const styles = StyleSheet.create({
	container: {},
	mainTitle: {
		color: "white",
		marginVertical: 48,
		textAlign: "center",
	},
	titleO: {
		color: colors.primaryColor,
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 200,
		borderColor: "white",
		borderWidth: 12,
		overflow: "hidden",
		margin: 36,
	},
	image: {
		width: "100%",
		height: "100%",
	},
})
