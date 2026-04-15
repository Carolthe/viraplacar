import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation()
  return (
    
    <View style={styles.container}> 
      <View style={styles.containerLogo}>
        <Image source={require('../assets/bola1.png')} style={styles.image} />
        <Text style={styles.texto}
        onPress={()=> navigation.replace('Home')}
        >MUNDIAL</Text>
      </View>
      <View style={styles.containerBotton}>
      <TouchableOpacity style={styles.button1}
      onPress={() => navigation.replace('Login')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.replace('CriarConta')}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    backgroundColor: '#0f172a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    width: '100%', //Alterar depos####
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
  button1: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  button: {
    backgroundColor: '#22c55e',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  
  },
  containerBotton: {
    flexDirection: 'row',
    gap: 10,
  },
  
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});