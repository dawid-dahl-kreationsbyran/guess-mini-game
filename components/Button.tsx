import React from "react"
import {
	ColorValue,
	GestureResponderEvent,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native"
import variables from "../style/variables"

type Props = {
	type: "primary" | "secondary"
	color?: ColorValue | null | undefined
	onPress?: null | ((event: GestureResponderEvent) => void) | undefined
	title?: string
}

const Button: React.FC<Props> = ({ type, color, children }) => {
	const styleProps = { color: color ? color : undefined }

	const pressHandler = () => {
		console.log("Pressed!")
	}

	return (
		<View style={styles.outerContainer}>
			<Pressable
				style={styles.innerContainer}
				onPress={pressHandler}
				android_ripple={{ color: variables.primaryColor }}
			>
				<Text style={[styles.text, styleProps]}>{children}</Text>
			</Pressable>
		</View>
	)
}

export default Button

const styles = StyleSheet.create({
	outerContainer: {
		margin: 4,
		borderRadius: 6,
		overflow: "hidden",
	},
	innerContainer: {
		backgroundColor: variables.primaryColorDarker,
		justifyContent: "center",
		paddingVertical: 12,
		...variables.iosShadow,
		...variables.androidShadow,
	},
	text: { textAlign: "center" },
})
