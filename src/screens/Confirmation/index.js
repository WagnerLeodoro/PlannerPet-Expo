import { View, Text } from 'react-native'
import React from 'react'

import Button from '../../components/Button'
import { styles } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native';

const emojis = {
    hug: '🤗',
    smile: '😄',
};

export default function Confirmation({ title, subtitle, buttonTitle, icon, nextScreen, }) {
    const { navigate } = useNavigation();
    const routes = useRoute();

    function handleMoveOn() {
        navigate(routes.params.nextScreen);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>{emojis[routes.params.icon]}</Text>
            <Text style={styles.title}>
                {routes.params.title}
            </Text>
            <Text style={styles.subtitle}>
                {routes.params.subtitle}
            </Text>

            <Button
                onPress={handleMoveOn}
                text={routes.params.buttonTitle}
                color={'#fff'}
                width={240}
                height={42}
                backgroundColor={'#F25C05'}
            />
        </View>
    )
}