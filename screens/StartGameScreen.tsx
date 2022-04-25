import { StyleSheet, Text, View, TextInput } from "react-native"
import variables from "../style/variables"
import React from "react"
import Button from "../components/Button"

type Props = {}

const StartGameScreen: React.FC<Props> = () => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						maxLength={2}
						keyboardType="number-pad"
					/>
				</View>
				<Button type="primary" color="white">
					Reset
				</Button>
				<Button type="primary" color="white">
					Confirm
				</Button>
			</View>
		</View>
	)
}

export default StartGameScreen

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 100,
		marginHorizontal: 24,
		backgroundColor: "white",
		borderRadius: 8,
		...variables.iosShadow,
		...variables.androidShadow,
	},
	container: {
		padding: 16,
		backgroundColor: variables.primaryColor,
		borderRadius: 8,
	},
	inputContainer: {
		alignItems: "center",
	},
	textInput: {
		fontSize: 32,
		marginBottom: 24,
		color: "white",
		borderBottomColor: "white",
		borderBottomWidth: 2,
		textAlign: "center",
		width: "20%",
	},
})
