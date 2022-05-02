import {
	StyleSheet,
	Alert,
	View,
	TextInput,
	GestureResponderEvent,
	KeyboardAvoidingView,
	ScrollView,
	Text,
	Platform,
} from "react-native"
import variables from "../style/variables"
import React, { useState } from "react"
import colors from "../style/colors"
import global from "../style/global"
import Button from "../components/ui/Button"
import H1 from "../components/ui/H1"
import Paragraph from "../components/ui/Paragraph"
import { StatusBar } from "expo-status-bar"

type Props = {
	pickedNumberHandler: (pickedNumber: number) => void
}

const StartGameScreen: React.FC<Props> = ({ pickedNumberHandler }) => {
	const [enteredNumber, setEnteredNumber] = useState("")

	const numberInputHandler = (input: string) => setEnteredNumber(input)

	const confirmInputHandler = (e: GestureResponderEvent) => {
		const number = parseInt(enteredNumber)

		if (isNaN(number) || number <= 0 || number > 99) {
			Alert.alert(
				"Invalid number",
				"Number has to be a number between 0 and 99",
				[
					{
						text: "Okay",
						style: "destructive",
						onPress: resetInputHandler,
					},
				]
			)

			return
		}

		pickedNumberHandler(number)
	}

	const resetInputHandler = () => setEnteredNumber("")

	let OS = "iOS"

	if (Platform.OS === "android") {
		OS = "android"
	}

	return (
		<>
			<StatusBar style="light" />
			<ScrollView>
				<KeyboardAvoidingView behavior="position">
					<View style={[styles.wrapper, global.wrapper]}>
						<H1 style={styles.mainTitle}>Guess My Number</H1>
						<View style={styles.container}>
							<View style={styles.inputContainer}>
								<Paragraph style={styles.helperText}>
									Enter a number!
								</Paragraph>
								<TextInput
									style={styles.textInput}
									maxLength={2}
									keyboardType="number-pad"
									onChangeText={numberInputHandler}
									value={enteredNumber}
								/>
							</View>
							<View style={styles.buttonContainer}>
								<Button
									type="primary"
									textColor="white"
									onPress={confirmInputHandler}
								>
									Confirm
								</Button>
								<Button
									type="primary"
									textColor="white"
									onPress={resetInputHandler}
								>
									Reset
								</Button>
							</View>
						</View>
					</View>
					<Text style={styles.osText}>This app runs on: {OS}</Text>
				</KeyboardAvoidingView>
			</ScrollView>
		</>
	)
}

export default StartGameScreen

const styles = StyleSheet.create({
	wrapper: {
		borderRadius: 8,
		marginBottom: 24,
	},
	mainTitle: {
		color: "white",
		textAlign: "center",
		marginBottom: 24,
		...variables.iosShadow,
		...variables.androidShadow,
	},
	container: {
		padding: 16,
		backgroundColor: colors.primaryColor,
		borderRadius: 8,
		...variables.iosShadow,
		...variables.androidShadow,
	},
	inputContainer: {
		alignItems: "center",
	},
	helperText: {
		color: "white",
		marginBottom: 24,
	},
	textInput: {
		fontSize: 32,
		fontFamily: "open-sans",
		marginBottom: 24,
		color: "white",
		borderBottomColor: "white",
		borderBottomWidth: 2,
		textAlign: "center",
		width: "20%",
	},
	buttonContainer: {
		flexDirection: "row",
	},
	osText: {
		color: Platform.select({
			ios: "white",
			android: "black",
		}),
	},
})
