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
      <Text style={styles.texto2}>Brasileirão Série A 2026:</Text>
      <CardOpcoesGrande
        imagem={require('../assets/foguete.png')}
        titulo="Placar do Jogo"
        descricao="Qual o placar do jogo?"
        textoExtra="Escolha o Placar Exato:"
        textoBotao="Jogar"
        onPressBotao={() => navigation.replace('PlacarJogo')} />

      {/* <CardOpcoesGrande
        imagem={require('../assets/raio.png')}
        titulo="Time Ganhador"
        descricao="Qual time vai ganhar?"
        textoExtra="Escolha um Time ou Empate:"
        textoBotao="Jogar"
        onPressBotao={() => navigation.replace('TimeGanhador')} /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 1000,
    backgroundColor: '#0e0e0e',
    height: '100%'
  },

  texto: {
    color: '#fff',
    fontSize: 24,
    marginTop: 30,
    fontWeight: 'bold',
  },
  texto2: {
    color: '#d7d4d4',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  }
});