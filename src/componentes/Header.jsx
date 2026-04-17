import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const navigation = useNavigation()
  const { user, logout } = useAuth();
  return (

    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('../assets/bola1.png')} style={styles.image} />
        <Text style={styles.texto}
          onPress={() => navigation.replace('Home')}
        >MUNDIAL</Text>
      </View>
      <View style={styles.containerBotton}>
        {user ? (
          <TouchableOpacity
            style={styles.buttonSair}
            onPress={async () => {
              await logout();
              navigation.replace("Home");
            }}
          >
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => navigation.replace("Login")}
            >
              <Text style={styles.buttonTextEntrar}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.replace("CriarConta")}
            >
              <Text style={styles.buttonTextCriar}>Criar Conta</Text>
            </TouchableOpacity>
          </>
        )}
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
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  button: {
    backgroundColor: '#22c55e',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonSair: {
    backgroundColor: '#22c55e00',
    justifyContent: 'center',
    paddingHorizontal: 0,
    borderRadius: 8,
    paddingVertical: 6,
  },
  containerBotton: {
    flexDirection: 'row',
    gap: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderWidth: 2,
    borderColor: '#c3c7c1',
    borderRadius: 8,
  },
  buttonTextEntrar: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    paddingHorizontal: 5,
    paddingVertical: 6,
    borderWidth: 2,

  },
  buttonTextCriar: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
});