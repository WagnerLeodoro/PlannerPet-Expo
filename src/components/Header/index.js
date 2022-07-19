import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/Feather'
import { styles } from './styles';


const Header = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plannerpet:user');
            setUserName(user || '');
        }

        loadStorageUserName();
    }, []);

    return (
        <View style={styles.userInfo}>
            <View>
                <Text style={styles.userGreetings}>Olá, </Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <View style={styles.iconBackground}>
                <Icon name="user" size={30} />
            </View>
        </View>
    );
};

export default Header;