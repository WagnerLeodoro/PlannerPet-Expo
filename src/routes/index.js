import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Welcome from '../screens/Welcome';
import Confirmation from '../screens/Confirmation';
import RegisterPet from '../screens/RegisterPet';
import UserIdentification from '../screens/UserIdentification';
import theme from '../global/theme';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerMode: 'none',
                cardStyle: {
                    backgroundColor: theme.secondaryColor,
                },
            }}>
                <Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Screen name="Confirmation" component={Confirmation} options={{ headerShown: false }} />
                <Screen name="UserIdentification" component={UserIdentification} options={{ headerShown: false }} />
                <Screen name="RegisterPet" component={RegisterPet} options={{ headerShown: false }} />

            </Navigator>
        </NavigationContainer>
    )
}