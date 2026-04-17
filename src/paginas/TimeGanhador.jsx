import { Text, StyleSheet, ScrollView, Dimensions, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import Header from "../componentes/Header";
import CardPartida from "../componentes/CardPartida";
import CalculoPremio from "../componentes/CalculoPremio";
import { useNavigation } from "@react-navigation/native";
import api from "../services/api";
import CardTimeGanhador from "../componentes/CardTimeGanhador";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function TimeGanhador (){
  const navigation = useNavigation();

  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================================
  // 🔥 BUSCAR JOGOS DO BACKEND
  // ================================
  useEffect(() => {
    async function loadJogos() {
      try {
        const response = await api.get("/apostas/jogos");
        setJogos(response.data);
      } catch (error) {
        console.log("Erro ao buscar jogos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadJogos();
  }, []);

  // ================================
  // 🔥 FORMATAR DATA
  // ================================
  function formatarData(data) {
    const date = new Date(data);

    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
    });
  }
  function formatarHora(hora) {
  if (!hora) return "";

  return hora.slice(0, 5); // "18:30:00" → "18:30"
}

  // ================================
  // 🔥 LOADING
  // ================================
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0e0e0e" }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            style={styles.scrollStyle}>
            <Header />

            <Text style={styles.descricao3} >Acerte o Time que vai Ganhar</Text>

        <Text style={styles.descricaoCampeonato}>Brasileirão Série A:</Text>

            {/* ================================
          🔥 MAP DOS JOGOS (DINÂMICO)
      ================================ */}
      {jogos.map((jogo) => (
        <View key={jogo.id_jogo} style={{ marginBottom: 25 }}>

          <CardPartida
            navigation={navigation}
            matchTime={formatarHora(jogo.hora_jogo)}
            matchDate={formatarData(jogo.data_jogo)}
            teamA={{
              nome: jogo.nome_time1,
              imagem: { uri: jogo.img_time1 }
            }}
            teamB={{
              nome: jogo.nome_time2,
              imagem: { uri: jogo.img_time2 }
            }}
          />
        
       <CardTimeGanhador/>

        </View>
      ))}
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollStyle: {
        backgroundColor: '#0e0e0e', // fundo preto que ocupa toda a tela
    },

    scrollContainer: {
        minHeight: SCREEN_HEIGHT, // garante que o conteúdo ocupe toda a altura
       alignItems: "stretch",
        paddingBottom: 50,
    },

    titulo: {
        color: '#ffffff',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 10,
        textAlign: 'center',
    },

    descricao: {
        color: '#cedad2',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 55,
        marginHorizontal: 20,
    },
    descricao2: {
        color: 'white',
        marginTop: 15,
        marginBottom: 10,
        fontWeight: 500,
        fontSize: 17,
    },
    descricao3: {
        color: "white",
        marginTop: 20,
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 60,
    },
    descricaoCampeonato: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 15,
        textAlign: 'center'
    },
    botao: {
        backgroundColor: '#22c55e',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        width: '80%',

        // glow botão leve
        shadowColor: '#22c55e',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },

    botaoTexto: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap', // 🔑 quebra linha automaticamente
        justifyContent: 'center', // centraliza
        gap: 10,
        marginBottom: 30,
        alignItems: 'center'
    },
})