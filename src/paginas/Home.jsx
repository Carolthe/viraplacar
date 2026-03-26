import { View, Text, StyleSheet } from 'react-native';
import Carousel from '../componentes/Carousel';
import CardOpcoes from '../componentes/CardOpcoes';
import CardOpcoesGrande from '../componentes/CardOpcaoGrande';

export default function Home() {
  return (
    <View style={styles.container}>
      <Carousel />

      <Text style={styles.texto}>Faça Sua Aposta</Text>

      {/* 🔥 Container dos cards */}
      <View style={styles.containerCards}>
        <CardOpcoes
          titulo="Campeão do Mundo"
          imagem={require('../assets/trofeu.png')}
        />

        <CardOpcoes
          titulo="Vencedor da Partida"
          imagem={require('../assets/raio.png')}
        />

        <CardOpcoes
          titulo="Placar do Jogo"
          imagem={require('../assets/foguete.png')}
        />
      </View>
      <CardOpcoesGrande
        imagem={require('../assets/trofeu.png')}
        titulo="Campeão da Copa"
        descricao="Quem vai levantar o troféu?"
        textoExtra="Escolha a Seleção:"
        textoBotao="Apostar no Campeão"
        
      />
       <CardOpcoesGrande
        imagem={require('../assets/raio.png')}
        titulo="Vencedor da Partida"
        descricao="Quem vai ganhar a partida?"
        textoExtra="Escolha o Time:"
        textoBotao="Apostar no Ganhador"
        
      />
       <CardOpcoesGrande
        imagem={require('../assets/foguete.png')}
        titulo="Placar do Jogo"
        descricao="Qual o placar do jogo?"
        textoExtra="Escolha o Placar:"
        textoBotao="Acertar o Placar"
        
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

  },

  texto: {
    color: 'white',
    fontSize: 24,
    marginTop: 40,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  containerCards: {
    flexDirection: 'row',        // 🔥 deixa horizontal
    justifyContent: 'center',    // centraliza
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
  }
});