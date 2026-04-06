import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VoltarInicial from './VoltarInicial';

export default function Header() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}> {/* Lado esquerdo */}
      <View style={styles.containerLogo}>
        <VoltarInicial/>
        <Image source={require('../assets/bola1.png')} style={styles.image} />
        <Text style={styles.texto}
        onPress={()=> navigation.replace('Home')}
        >MUNDIAL</Text>
      </View>
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.replace('FormularioContato')}>
        <Text style={styles.buttonText}>Entre em Contato</Text>
      </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    backgroundColor: '#0f172a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    width: '100vw', //Alterar depos####
  },
  containerLogo: {
    flexDirection: 'row', 
    alignItems: 'center',
    gap: 5,
  },
  image: {
    width: 20,
    height: 20,
  },
  texto: {
    color: '#d4d2ca',
    fontSize: 18,
    fontWeight: 500,
  },
  button: {
    backgroundColor: '#22c55e',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});