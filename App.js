import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './AppNavigtor';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adopt-A-Buddy :-)</Text>
      <Text style={styles.subtitle}>Find your best friend today!</Text>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
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
    padding: 15,
  }
});
