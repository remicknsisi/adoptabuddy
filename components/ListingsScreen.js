import React from 'react';
import { View, Text, Button } from 'react-native';

const ListingsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Listings Screen</Text>
            <Button
                title="Go back to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default ListingsScreen;