import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from './styles'

export default function Cards({ item, backgroundColor, onPress, opacity }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ backgroundColor }}
        >
            <View style={[styles.container, backgroundColor]}>
                <Image source={item.photo} style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}