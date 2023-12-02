import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.body}>
                Discover your future four-legged companion with Adopt-A-Buddy, a mobile app dedicated to connecting animal lovers with adorable dogs and cats awaiting their forever homes. Immerse yourself in the heartwarming profiles of each furry friend, uncovering their unique personalities and stories. This app is a labor of love, born out of a passion for our animals and a desire to explore the world of React Native and mobile development. Welcome to Adopt-A-Buddy, where every swipe brings you closer to your new best friend.
            </Text>
            <Button
                title="Go back to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default AboutScreen;

const styles = StyleSheet.create({
    body: {
        fontSize: 15,
        padding: 25
    }
});
