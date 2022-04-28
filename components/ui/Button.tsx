import React from "react"
import {
	ColorValue,
	GestureResponderEvent,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native"
import colors from "../../style/colors"
import variables from "../../style/variables"

type Props = {
	type: "primary" | "secondary"
	textColor?: ColorValue | null | undefined
	onPress?: null | ((event: GestureResponderEvent) => void) | undefined
	title?: string
}

const Button: React.FC<Props> = ({ type, textColor, onPress, children }) => {
	const styleProps = { color: textColor ? textColor : undefined }

	return (
		<View style={styles.outerContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.pressed, styles.innerContainer]
						: styles.innerContainer
				}
				onPress={onPress}
				android_ripple={{ color: colors.primaryColor }}
			>
				<Text style={[styles.text, styleProps]}>{children}</Text>
			</Pressable>
		</View>
	)
}

export default Button

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		margin: 4,
		borderRadius: 6,
		overflow: "hidden",
	},
	innerContainer: {
		backgroundColor: colors.primaryColorDarker,
		justifyContent: "center",
		paddingVertical: 12,
		...variables.iosShadow,
		...variables.androidShadow,
	},
	text: { textAlign: "center", color: colors.black },
	pressed: {
		opacity: 0.75,
	},
})
