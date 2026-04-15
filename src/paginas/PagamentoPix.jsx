import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useState } from "react";
import ResumoAposta from "../componentes/ResumoAposta";
import Header from "../componentes/Header";
import CardFormularioPix from "../componentes/CardFormularioPix";
import CardQrCode from "../componentes/CardQrCode";
import VoltarAposta from "../componentes/VoltarAposta";

export default function PagamentoPix({ route }) {
  const params = route?.params || {};

  const { jogo, placar, valor, premio = 0, id_aposta } = route.params || {};

  const [mostrarQr, setMostrarQr] = useState(false);
  console.log("PARAMS RECEBIDOS:", route.params);
  

  return (
    <ScrollView style={styles.screen}>
      <Header />

      <View style={styles.container}>
        <VoltarAposta/>
        <Text style={styles.title}>Pagamento via Pix</Text>

        <ResumoAposta
          jogo={jogo}
          placar={placar}
          valor={valor}
          premio={premio}
        />

        {!mostrarQr ? (
          <CardFormularioPix
            id_aposta={id_aposta}
            onGerar={() => setMostrarQr(true)} // 🔥 ESSENCIAL
          />
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