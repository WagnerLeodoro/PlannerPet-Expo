import React, { useEffect } from 'react';
import {
    useFonts,
    Jost_400Regular,
    Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import Routes from './routes';

const Main = () => {
    const [fontsLoaded] = useFonts({
        Jost_400Regular,
        Jost_600SemiBold,
    });

    useEffect(() => {
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: false,
                shouldSetBadge: false,
            }),
        });

        // return () => subscription.remove();
    }, []);

    if (!fontsLoaded) return <AppLoading />;

    return <Routes />;
};

export default Main;