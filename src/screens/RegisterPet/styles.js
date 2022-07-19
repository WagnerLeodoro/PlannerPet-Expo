import { StyleSheet } from 'react-native';
import fonts from '../../global/fonts';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 20,
        height: '100%',
        backgroundColor: theme.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        display: 'flex',
        width: 320,
    },
    text: {
        fontFamily: fonts.text,
        fontSize: 16,
        lineHeight: 30,
        textAlign: 'left',
        justifyContent: 'flex-start'
    },
    btnBox: {
        display: 'flex',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 10,
    },
    button: {
        display: 'flex',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#0e0e0e',
        shadowOffset: { width: 4, height: 2 },
        elevation: 5,
        borderRadius: 5
    },
    btnText: {
        fontSize: 18,
        fontFamily: fonts.heading,
        textAlign: 'center'
    },
    categories: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
    },
    formContainer: {
        display: 'flex',
        width: 320,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    input: {
        width: 300,
        height: 50,
        marginBottom: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: theme.secondaryColor,
        borderRadius: 10,
        color: theme.textColor,
        padding: 15,
    },
    radioOptions: {
        width: 300,
        height: 80,
        marginBottom: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: theme.secondaryColor,
        borderRadius: 10,
        color: theme.textColor,
        padding: 5,
    }
});