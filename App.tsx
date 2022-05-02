import { StatusBar } from "expo-status-bar"
import {
	ImageBackground,
	StyleSheet,
	SafeAreaView,
	useWindowDimensions,
} from "react-native"
import StartGameScreen from "./screens/StartGameScreen"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import GameScreen from "./screens/GameScreen"
import colors from "./style/colors"
import GameOverScreen from "./screens/GameOverScreen"
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading"

const App = () => {
	const [pickedNumber, setPickedNumber] = useState<number | null>(null)
	const [isGameOver, setIsGameOver] = useState(true)

	const { width, height } = useWindowDimensions()

	const marginTopDistance = height < 420 ? 0 : 32

	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	})

	if (!fontsLoaded) {
		return <AppLoading />
	}

	const pickedNumberHandler = (pickedNumber: number) => {
		setPickedNumber(pickedNumber)
		setIsGameOver(false)
	}

	const restartGameHandler = () => {
		setPickedNumber(null)
	}

	const gameOverHandler = () => {
		setIsGameOver(true)
	}

	let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />

	if (pickedNumber) {
		screen = (
			<GameScreen
				pickedNumber={pickedNumber}
				gameOverHandler={gameOverHandler}
			/>
		)
	}

	if (isGameOver && pickedNumber) {
		screen = <GameOverScreen restartGameHandler={restartGameHandler} />
	}

	return (
		<LinearGradient
			colors={["#eb4034", "#46eb34"]}
			style={styles.container}
		>
			<ImageBackground
				source={require("./assets/images/background.png")}
				resizeMode="cover"
				style={styles.container}
				imageStyle={styles.backgroundImage}
			>
				<StatusBar style="auto" />
				<SafeAreaView
					style={[
						styles.safeAreaView,
						{ marginTop: marginTopDistance },
					]}
				>
					{screen}
				</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	safeAreaView: {
		marginHorizontal: 16,
	},
	container: {
		height: "100%",
		backgroundColor: colors.secondaryColor,
	},
	backgroundImage: { opacity: 0.15 },
})

export default App
