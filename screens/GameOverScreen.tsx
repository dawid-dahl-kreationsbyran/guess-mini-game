import {
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions,
	useWindowDimensions,
	ScrollView,
} from "react-native"
import React from "react"
import H1 from "../components/ui/H1"
import colors from "../style/colors"
import Button from "../components/ui/Button"

type Props = {
	restartGameHandler: () => void
}

const GameOverScreen: React.FC<Props> = ({ restartGameHandler }) => {
	const { width, height } = useWindowDimensions()

	let imageSize = {
		width: 300,
		height: 300,
	}

	if (height < 500) {
		imageSize = {
			width: 150,
			height: 150,
		}
	}

	return (
		<ScrollView style={styles.screen}>
			<View style={styles.container}>
				<H1 style={styles.mainTitle}>
					<Text style={styles.titleSpan}>G</Text>ame{" "}
					<Text style={styles.titleSpan}>O</Text>ver!
				</H1>
				<View style={styles.imageWrapper}>
					<View style={[styles.imageContainer, imageSize]}>
						<Image
							style={styles.image}
							source={require("../assets/images/success.png")}
						></Image>
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<Button
						type="primary"
						textColor="white"
						onPress={restartGameHandler}
					>
						Restart
					</Button>
				</View>
			</View>
		</ScrollView>
	)
}

export default GameOverScreen

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
	screen: {
		height: "100%",
	},
	container: {},
	mainTitle: {
		color: "white",
		marginVertical: 48,
		textAlign: "center",
	},
	titleSpan: {
		color: colors.primaryColor,
	},
	imageWrapper: {
		alignItems: "center",
		justifyContent: "center",
	},
	imageContainer: {
		width: deviceWidth < 400 ? 200 : 300,
		height: deviceWidth < 400 ? 200 : 300,
		borderRadius: deviceWidth < 400 ? 200 : 300,
		borderColor: "white",
		borderWidth: 12,
		overflow: "hidden",
		margin: 32,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	buttonContainer: {
		flexDirection: "row",
	},
})
