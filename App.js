import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Nav from './components/Nav';

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text>Testing!!!</Text>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefae0',
  },
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50, // Adjust based on the height of your Nav component
  },
});
