import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import ListingsScreen from './components/ListingsScreen';
import Nav from './components/Nav';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Adopt-A-Buddy Home" component={HomeScreen} />
            <Stack.Screen name="Listings" component={ListingsScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;