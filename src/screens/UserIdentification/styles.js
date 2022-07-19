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
        fontSize: 24,
        fontFamily: fonts.heading,
        textAlign: 'center',
        lineHeight: 38,
    },
    emoji: {
        fontSize: 44,
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        width: 280,
        marginTop: 40,
        marginBottom: 40,
        fontFamily: fonts.text,
        fontSize: 18,
        lineHeight: 25,
        color: theme.textColor,
        textAlign: 'center',
    },
    input: {
        marginTop: 40,
        marginBottom: 40,
        fontSize: 18,
        fontFamily: fonts.text,
        lineHeight: 25,
        color: theme.textColor,
        textAlign: 'center',
        borderBottomWidth: 1,
    }
});