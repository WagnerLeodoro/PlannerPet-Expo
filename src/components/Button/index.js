import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function Button({ backgroundColor, width, height, text, color, opacity, onPress }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: backgroundColor, width: width, height: height, opacity: opacity }]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={[styles.text, { color: color }]}>{text}</Text>
        </TouchableOpacity>
    )
}