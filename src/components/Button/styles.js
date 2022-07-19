import { StyleSheet } from 'react-native';
import fonts from '../../global/fonts';

export const styles = StyleSheet.create({
    button: {
        display: 'flex',
        marginTop: 10,
        width: 126,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: '#0e0e0e',
        shadowOffset: { width: 4, height: 2 },
        elevation: 5,
        borderRadius: 10
    },
    text: {
        fontSize: 18,
        fontFamily: fonts.heading,
        textAlign: 'center'
    }
});