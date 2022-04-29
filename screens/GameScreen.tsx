import { Alert, StyleSheet, View } from "react-native"
import React, { useEffect, useState } from "react"
import Paragraph from "../components/ui/Paragraph"
import colors from "../style/colors"
import global from "../style/global"
import Button from "../components/ui/Button"
import H1 from "../components/ui/H1"
import GuessContainer from "../components/game/GuessContainer"
import { Ionicons } from "@expo/vector-icons"

type Props = {
	pickedNumber: number
	gameOverHandler: () => void
}

const generateRandomBetween = (
	min: number = 0,
	max: number = 100,
	exclude?: number
): number => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude)
	} else {
		return rndNum
	}
}

const isNumberEqualToTheConfirmedNumber = (
	number: number,
	pickedNumber: number
) => (number === pickedNumber ? true : false)

let minBoundary = 1
let maxBoundary = 100

const GameScreen: React.FC<Props> = ({ pickedNumber, gameOverHandler }) => {
	const initialGuess = generateRandomBetween(1, 100, pickedNumber)

	const [currentGuess, setCurrentGuess] = useState(initialGuess)

	useEffect(() => {
		if (isNumberEqualToTheConfirmedNumber(currentGuess, pickedNumber)) {
			gameOverHandler()

			minBoundary = 0
			maxBoundary = 100
		}
	}, [currentGuess, pickedNumber])

	const nextGuessHandler = (direction: "lower" | "greater") => {
		if (
			(direction === "lower" && currentGuess < pickedNumber) ||
			(direction === "greater" && currentGuess > pickedNumber)
		) {
			Alert.alert("Don't lie!", "You know that this is wrong...", [
				{
					text: "Sorry!",
					style: "cancel",
				},
			])

			return
		}

		if (direction === "lower") {
			maxBoundary = currentGuess
		} else {
			minBoundary = currentGuess + 1
		}

		const newRandomNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		)

		setCurrentGuess(newRandomNumber)
	}

	return (
		<View style={[styles.wrapper, global.wrapper]}>
			<View style={styles.titleContainer}>
				<H1 style={styles.title}>Opponents Guess</H1>
			</View>
			<GuessContainer>{currentGuess}</GuessContainer>
			<View>
				<Paragraph style={styles.paragraph}>Higher Or Lower?</Paragraph>
				<View style={styles.buttonContainer}>
					<Button
						type="primary"
						textColor="white"
						onPress={_press => nextGuessHandler("lower")}
					>
						<Ionicons name="md-remove" size={24} />
					</Button>
					<Button
						type="primary"
						textColor="white"
						onPress={_press => nextGuessHandler("greater")}
					>
						<Ionicons name="md-add" size={24} />
					</Button>
				</View>
			</View>
			<View>{/* FLATLIST */}</View>
		</View>
	)
}

export default GameScreen

const styles = StyleSheet.create({
	wrapper: {},
	paragraph: {
		textAlign: "center",
		marginBottom: 24,
	},
	buttonContainer: {
		flexDirection: "row",
	},
	titleContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 24,
	},
	title: {
		borderWidth: 4,
		borderColor: colors.primaryColorDarker,
		paddingVertical: 16,
		paddingHorizontal: 24,
		borderRadius: 8,
		marginBottom: 8,
	},
})
