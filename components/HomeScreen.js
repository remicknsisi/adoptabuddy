import { StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, Button, Image } from 'react-native';
import Cowboy from '../assets/Cowboy.png'

export default function HomeScreen({ navigation }) {
    return (
        <>
            <View style={styles.nav}>
                <View style={styles.buttonsContainer}>
                    <Button
                        title="About"
                        onPress={() => navigation.navigate('About')}
                        style={styles.button}
                    />
                    {/* //or TouchableOpacity */}
                    <Button
                        title="Listings"
                        onPress={() => navigation.navigate('Listings')}
                    />
                    <Button
                        title="Login"
                        onPress={() => navigation.navigate('Login')}
                        style={styles.button}
                    />
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <Text>Pet of the Week</Text>
                <Image
                    source={Cowboy}
                    style={{ width: 200, height: 200 }} />
                <StatusBar style="auto" />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#ccd5ae',
        justifyContent: 'center',
        width: '100%',
        height: '10%',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    button: {
        // padding: 10,
        // borderRadius: 50,
        // backgroundColor: '#faedcd'
    },
    scrollViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});