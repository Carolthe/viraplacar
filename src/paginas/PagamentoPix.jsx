import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useState } from "react";
import ResumoAposta from "../componentes/ResumoAposta";
import Header from "../componentes/Header";
import CardFormularioPix from "../componentes/CardFormularioPix";
import CardQrCode from "../componentes/CardQrCode";

export default function PagamentoPix({ route }) {
  const { jogo, placar, valor, premio } = route.params;

  const [mostrarQr, setMostrarQr] = useState(false);

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

        {/* 👇 Aqui está a mágica */}
        {!mostrarQr ? (
          <CardFormularioPix onGerar={() => setMostrarQr(true)} />
        ) : (
          <CardQrCode valor={valor} />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0e0e0e",
    paddingBottom: 50,
  },
  container: {
    padding: 16,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});