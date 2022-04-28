import { StyleSheet, Text, View } from "react-native"
import React from "react"
import colors from "../../style/colors"
import H1 from "../ui/H1"

type Props = {}

const GuessContainer: React.FC<Props> = ({ children }) => {
	return (
		<View style={styles.container}>
			<H1 style={styles.numberText}>{children}</H1>
		</View>
	)
}

export default GuessContainer

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 4,
		borderColor: colors.primaryColorDarker,
		paddingVertical: 16,
		paddingHorizontal: 24,
		borderRadius: 8,
		marginBottom: 24,
	},
	numberText: {},
})
