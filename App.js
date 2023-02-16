import { Canvas } from '@shopify/react-native-skia';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View } from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window')
const SQUARES_AMOUNT_HORIZONTAL = 10
const SQUARES_CONTAINER_SIZE = SCREEN_WIDTH / SQUARES_AMOUNT_HORIZONTAL
const PADDING = 10

export default function App() {
  return (
    <View style={styles.container}>
      <Canvas style={{ flex: 1, backgroundColor: 'red'}}>

      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
