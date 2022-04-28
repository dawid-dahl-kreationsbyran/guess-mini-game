import React from "react"
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"
import typography from "../../style/typography"

type Props = {
	style?: StyleProp<ViewStyle>
}

const H1: React.FC<Props> = ({ style, children }) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.text, style]}>{children}</Text>
		</View>
	)
}

export default H1

const styles = StyleSheet.create({
	container: {},
	text: { ...typography.h1 } as ViewStyle,
})
