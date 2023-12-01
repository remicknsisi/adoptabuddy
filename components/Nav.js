import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Nav({ navigation, route }) {
    const state = navigation?.dangerouslyGetState();

    return (
        <View style={styles.nav}>
            <View style={styles.buttonsContainer}>
                {state?.routes.map((screen, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate(screen.name)}
                        style={styles.button}
                    >
                        <Text>{screen.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
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
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#faedcd'
    }
});