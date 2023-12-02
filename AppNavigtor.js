import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ListingsScreen from './components/ListingsScreen';
import LoginScreen from './components/LoginScreen';
import AboutScreen from './components/AboutScreen';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#e9edc9',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                name="Listings"
                component={ListingsScreen}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="About"
                component={AboutScreen}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;