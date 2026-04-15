import { Text, StyleSheet, ScrollView } from 'react-native';
import Carousel from '../componentes/Carousel';
import CardOpcoesGrande from '../componentes/CardOpcaoGrande';
import Header from '../componentes/Header';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Carousel />
      <Text style={styles.texto}>Faça Seu Jogo</Text>
      <CardOpcoesGrande
        imagem={require('../assets/foguete.png')}
        titulo="Placar do Jogo"
        descricao="Qual o placar do jogo?"
        textoExtra="Escolha o Placar:"
        textoBotao="Jogar"
        onPressBotao={() => navigation.replace('PlacarJogo')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 100,
    backgroundColor: '#0e0e0e',
    height: '100vh'
  },

  texto: {
    color: 'white',
    fontSize: 24,
    marginTop: 30,
    fontWeight: 'bold',
  },
});