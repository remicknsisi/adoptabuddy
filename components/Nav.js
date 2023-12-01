import { StyleSheet, Text, View } from 'react-native';

export default function Nav() {
    return (
        <View style={styles.nav}>
            <Text style={styles.title}>Adopt-A-Buddy</Text>
            <View style={styles.buttonsContainer}>
                <Text style={styles.button}>Click me!</Text>
                <Text style={styles.button}>Click me!</Text>
                <Text style={styles.button}>Click me!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#ccd5ae',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '15%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    button: {
        padding: 10,
        borderRadius: '10',
        backgroundColor: '#faedcd'
    }
});