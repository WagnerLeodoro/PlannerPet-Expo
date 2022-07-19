import { View, Text, ScrollView, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import theme from '../../global/theme'

import Cards from '../../components/Cards'
import Button from '../../components/Button'
import RadioButton from '../../components/RadioButton'
import Header from '../../components/Header'
import AsyncStorage from '@react-native-async-storage/async-storage'

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Macho",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Fêmea",
    }
];

const TIPO = [
    {
        id: 1,
        photo: require('../../assets/img/5.png'),
        tipo: 'gato'
    },
    {
        id: 2,
        photo: require('../../assets/img/6.png'),
        tipo: 'cachorro'
    },
    {
        id: 3,
        photo: require('../../assets/img/7.png'),
        tipo: 'hamster'
    },
    {
        id: 4,
        photo: require('../../assets/img/8.png'),
        tipo: 'coelho'
    }
]

const GeneroBtn = ({ item, onPress, backgroundColor, textColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, backgroundColor, { width: 130 }, { height: 40 }]}
        >
            <Text style={[styles.btnText, textColor]}>{item.title}</Text>
        </TouchableOpacity>
    )
};

export default function RegisterPet() {
    const { navigate } = useNavigation();
    const [isGeneroSelected, setIsGeneroSelected] = useState(null)
    const [isTypeSelected, setIsTypeSelected] = useState(null)
    const [selected, setSelected] = useState(0)

    const [genero, setGenero] = useState('')
    const [tipo, setTipo] = useState('')
    const [name, setName] = useState('')
    const [dataNasc, setDataNasc] = useState('')
    const [caracteristicas, setCaracteristicas] = useState('')
    const [peso, setPeso] = useState(0)
    const [porte, setPorte] = useState(1)

    const renderGeneroBtn = ({ item }) => {
        const backgroundColor = item.id === isGeneroSelected ? "#5B4E43" : "#F5FAF7";
        const color = item.id === isGeneroSelected ? 'white' : 'black';
        return (
            <GeneroBtn
                item={item}
                onPress={() => {
                    setIsGeneroSelected(item.id);
                    setGenero(item.title);
                    console.log(item.title)
                }}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    const renderTypeCard = ({ item }) => {
        const backgroundColor = item.id === isTypeSelected ? "#5B4E43" : "#F5FAF7";
        const color = item.id === isTypeSelected ? 'white' : 'black';
        return (
            <Cards
                item={item}
                onPress={() => {
                    setIsTypeSelected(item.id);
                    setTipo(item.tipo)
                    console.log(item.tipo)
                }}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    const Pet = {
        id,
        genero,
        tipo,
        name,
        dataNasc,
        caracteristicas,
        peso,
        porte
    }

    async function savePet() {
        try {
            const data = await AsyncStorage.getItem('@plannerpets:pets');
            const oldPets = data ? (JSON.parse(data)) : {};

            const newPets = {
                [id]: {
                    data: Pet
                }
            }
            await AsyncStorage.setItem(
                '@plannerpets:pets',
                JSON.stringify({
                    ...newPets,
                    ...oldPets,
                })
            )
        } catch (err) {
            throw new Error(err);
        }
    }


    async function handleSave(pet) {
        try {
            await savePet({
                ...pet
            });

            navigate('Confirmation', {
                title: 'Tudo certo',
                subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar do seu Pet com muito carinho.',
                buttonTitle: 'Muito Obrigado :D',
                icon: 'hug',
                nextScreen: 'MyPets',
            });
        } catch {
            Alert.alert('Não foi possível salvar! 😢');
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Vamos Cadastrar seu animalzinho? {'\n'} Selecione as informações abaixo.
                    </Text>
                </View>
                <View style={styles.btnBox}>
                    <View style={{ marginRight: 30 }}>
                        <FlatList
                            data={DATA}
                            renderItem={renderGeneroBtn}
                            keyExtractor={(item) => item.id}
                            horizontal
                        />
                    </View>
                </View>
                <View style={styles.categories}>
                    <FlatList
                        data={TIPO}
                        renderItem={renderTypeCard}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Nome'}
                        onChangeText={setName}
                    />
                    <TextInput style={styles.input} placeholder={'Data de Nascimento'} onChangeText={setDataNasc} />
                    <TextInput style={styles.input} placeholder={'Características'} onChangeText={setCaracteristicas} />
                    <TextInput style={styles.input} placeholder={'Peso'} onChangeText={setPeso} />
                    <View>
                        <Text style={{ padding: 10, }}>Porte:</Text>
                        <View style={styles.radioOptions}>
                            <RadioButton
                                selected={selected}
                                options={['Pequeno', 'Médio', 'Grande']}
                                onChangeSelect={(opt, i) => {
                                    setPorte({ opt });
                                    setSelected(i);
                                    console.log(opt);
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 30 }}>
                    <Button
                        text={'Cadastrar'}
                        textColor={'white'}
                        backgroundColor={theme.secondaryColor}
                        opacity={0.8}
                        width={240}
                        height={42}
                        onPress={handleSave}
                    />
                </View>
            </View>
        </ScrollView>
    )
}