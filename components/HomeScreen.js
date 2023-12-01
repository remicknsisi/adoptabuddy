import { StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Button, Image } from 'react-native';
import Cowboy from '../assets/Cowboy.png'

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <Text>Pet of the Week</Text>
            <Image
                source={Cowboy}
                style={{ width: 200, height: 200 }} />
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});
