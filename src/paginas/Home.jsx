import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Carousel from '../componentes/Carousel';
import CardOpcoes from '../componentes/CardOpcoes';
import CardOpcoesGrande from '../componentes/CardOpcaoGrande';
import Header from '../componentes/Header';
import { useNavigation } from '@react-navigation/native';
import ResumoAposta from '../componentes/ResumoAposta';

export default function Home() {

  const navigation = useNavigation()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header/>
      <Carousel />

      <Text style={styles.texto}>Faça Seu Jogo</Text>

      {/* 🔥 Container dos cards pequenos */}
      <View style={styles.containerCards}>
        {/* <CardOpcoes
          titulo="Campeão do Mundo"
          imagem={require('../assets/trofeu.png')}
          onPress={() => navigation.replace('ApostaCampea')}
        /> */}

        {/* <CardOpcoes
          titulo="Vencedor da Partida"
          imagem={require('../assets/raio.png')}
          onPress={() => navigation.replace('VencedorPartida')}
        /> */}

        {/* <CardOpcoes
          titulo="Placar do Jogo"
          imagem={require('../assets/foguete.png')}
          onPress={() => navigation.replace('PlacarJogo')}
        /> */}
      </View>

      {/* 🔥 Cards grandes */}
      {/* <CardOpcoesGrande
        imagem={require('../assets/trofeu.png')}
        titulo="Campeão da Copa"
        descricao="Quem vai levantar o troféu?"
        textoExtra="Escolha a Seleção:"
        textoBotao="Jogar"
        onPressBotao={() => navigation.replace('ApostaCampea')}
      /> */}

      {/* <CardOpcoesGrande
        imagem={require('../assets/raio.png')}
        titulo="Vencedor da Partida"
        descricao="Quem vai ganhar a partida?"
        textoExtra="Escolha o Time:"
        textoBotao="Jogar"
         onPressBotao={() => navigation.replace('VencedorPartida')}
      /> */}

      <CardOpcoesGrande
        imagem={require('../assets/foguete.png')}
        titulo="Placar do Jogo"
        descricao="Qual o placar do jogo?"
        textoExtra="Escolha o Placar:"
        textoBotao="Jogar"
         onPressBotao={() => navigation.replace('PlacarJogo')}
      />
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

  containerCards: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 25,
  },
});