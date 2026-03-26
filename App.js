import { StyleSheet, Text, View } from 'react-native';
import Header from './src/componentes/Header';
import Home from './src/paginas/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Home/>
      <Text style={styles.texto} >Welcome!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    
  },
  texto:{
    color: 'white',
  }
});
