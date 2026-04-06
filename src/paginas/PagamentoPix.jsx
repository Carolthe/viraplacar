import { View, StyleSheet, ScrollView, Text } from "react-native";
import ResumoAposta from "../componentes/ResumoAposta";
import Header from "../componentes/Header";
import CardFormularioPix from "../componentes/CardFormularioPix";

export default function PagamentoPix({ route }) {
  const { jogo, placar, valor, premio } = route.params;

  return (
    <ScrollView style={styles.screen}>
      <Header />

      <View style={styles.container}>
        <Text style={styles.title}>Pagamento via Pix</Text>

        <ResumoAposta
          jogo={jogo}
          placar={placar}
          valor={valor}
          premio={premio}
        />

        <CardFormularioPix />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    paddingBottom: 50,
  },
  container: {
    padding: 16,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});