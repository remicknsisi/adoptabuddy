import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Login Screen</Text>
            <Button
                title="Go back to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default LoginScreen;