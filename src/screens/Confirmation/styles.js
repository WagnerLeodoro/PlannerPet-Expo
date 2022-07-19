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
        fontFamily: fonts.heading,
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: 38,
    },
    subtitle: {
        margin: 20,
        color: theme.textColor,
        fontFamily: fonts.text,
        fontSize: 18,
        textAlign: 'center',
    },
    emoji: {
        fontSize: 78,
        textAlign: 'center',
        marginBottom: 40
    }
});