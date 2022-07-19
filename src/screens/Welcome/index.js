import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'

import Button from '../../components/Button'
import { styles } from './styles'

export default function Welcome({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Cuide do seu Pet {'\n'}
                de forma fácil
            </Text>
            <Image source={require('../../assets/img/groomer1.png')} style={styles.image} />
            <Text style={styles.subtitle}>
                Não esqueça mais dos cuidados com o seu Pet. Nós cuidamos de lembrar você sempre que precisar
            </Text>
            <Button
                onPress={() => navigation.navigate('UserIdentification')}
                text={'>'}
                color={'#fff'}
                width={60}
                height={47}
                backgroundColor={'#F25C05'}
            />
        </View>
    )
}