import { StyleSheet } from 'react-native';
import fonts from '../../global/fonts';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
    userInfo: {
        display: 'flex',
        flexDirection: 'row',
        width: 320,
        margin: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userGreetings: {
        fontSize: 32,
        fontFamily: fonts.text,
        color: theme.textColor
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: theme.textColor
    },
    iconBackground: {
        backgroundColor: theme.secondaryColor,
        borderRadius: 50,
        width: 42,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center'
    }
})