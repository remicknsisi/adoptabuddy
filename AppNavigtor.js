import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import Nav from './components/Nav';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: ({ scene }) => {
                    return <Nav navigation={scene?.descriptor?.navigation} route={scene?.route} />;
                },
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;