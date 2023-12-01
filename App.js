import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Nav from './components/Nav';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adopt-A-Buddy</Text>
      <Text style={styles.subtitle}>Find your best friend today</Text>
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
  },
  title: {
    backgroundColor: '#ccd5ae',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingTop: 50
  },
  subtitle: {
    backgroundColor: '#ccd5ae',
    width: '100%',
    fontSize: 15,
    paddingLeft: 15,
  }
});
