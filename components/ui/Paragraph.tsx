import React from "react"
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"
import typography from "../../style/typography"

type Props = {
	style?: StyleProp<ViewStyle>
}

const Paragraph: React.FC<Props> = ({ style, children }) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.text, style]}>{children}</Text>
		</View>
	)
}

export default Paragraph

const styles = StyleSheet.create({
	container: {},
	text: { ...typography.p } as ViewStyle,
})
