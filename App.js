import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import registerNNPushToken from 'native-notify';
import { registerRootComponent } from 'expo';


export default function App() {
  registerNNPushToken(6159, 'ih3rzQPUq1PtPdISELoVPd');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, NBA Score Notification when one of team score &gt;=100</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 5,
    color: 'green',
  }
});
registerRootComponent(App);