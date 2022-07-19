import React, { useState } from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles'
import Button from '../../components/Button'

export default function UserIdentification() {

    const { navigate } = useNavigation();

    const handleSubmit = async () => {
        await AsyncStorage.setItem('@plannerpet:user', username)
        if (!username) return Alert.alert('Ops...', 'Me diz como chamar você 😢');
        try {
            navigate('Confirmation', {
                title: 'Prontinho',
                subtitle: 'Agora vamos começar a cuidar de todos os detalhes do seu pet com muito carinho.',
                buttonTitle: 'Começar',
                icon: 'smile',
                nextScreen: 'RegisterPet',
            });
        } catch {
            Alert.alert('Ops...', 'Não foi possível salvar o seu nome. 😢');
        }
    }


    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [username, setUsername] = useState('')

    const handleInputBlur = () => {
        setIsFocused(false);
        setIsFilled(!!username);
    };

    const handleInputFocus = () => setIsFocused(true);

    const handleInputChange = (value = '') => {
        setIsFilled(!!value);
        setUsername(value);
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <Text style={styles.emoji}>{isFilled ? '😁' : '😀'}</Text>
                    <Text style={styles.title}>
                        Como podemos {'\n'} chamar você?
                    </Text>
                    <TextInput
                        {...{ isFocused }}
                        {...{ isFilled }}
                        style={styles.input}
                        placeholder="Digite seu nome"
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange}
                    />
                    <Button
                        onPress={handleSubmit}
                        text={'Confirmar'}
                        color={'#fff'}
                        width={240}
                        height={42}
                        backgroundColor={'#F25C05'}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}