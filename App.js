import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Dimensions } from 'react-native';
import registerNNPushToken from 'native-notify';
import { registerRootComponent } from 'expo';
import { test_push } from './src/utils/api';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  registerNNPushToken(6159, 'ih3rzQPUq1PtPdISELoVPd');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
        <Text style={styles.text}>Hi, NBA Score Notification when one of teams' score &gt;=100</Text>
        {/* <TouchableOpacity style={styles.btnLayer}>
        <Button type="default" 
        onPress={() => test_push()} style={styles.btn} title='Test Push'></Button>
        </TouchableOpacity> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    // padding: 1,
    color: 'green',
    height: 99,
    padding: 10,
    paddingTop: 30,
    // width: 340,
    // backgroundColor: '#999',
  },
  imageContainer: {
    // flex: 1,
    paddingTop: 58,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  btnLayer: {
    marginTop: 10,
    width: 300,
    height: 50,
  },
  btn: {
    borderRadius: 18,
  }
});
registerRootComponent(App);