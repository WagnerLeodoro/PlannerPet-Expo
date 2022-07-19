import { StyleSheet } from 'react-native';
import fonts from '../../global/fonts';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: theme.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: theme.textColor,
        fontSize: 32,
        fontFamily: fonts.heading,
        textAlign: 'center',
        lineHeight: 38,
    },
    image: {
        width: 300,
        height: 300,
        margin: (20, 10)
    },
    subtitle: {
        margin: 20,
        paddingLeft: 25,
        paddingRight: 16,
        fontFamily: fonts.text,
        fontSize: 18,
        lineHeight: 25,
        color: theme.textColor,
        textAlign: 'center',
    }
});