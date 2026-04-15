import { View, Text, StyleSheet } from "react-native";

export default function ResumoAposta({ jogo, placar, valor, premio }) {
  if (!valor || !placar) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Resumo da Aposta</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Jogo:</Text>
        <Text style={styles.value}>{jogo}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Placar Apostado:</Text>
        <Text style={styles.value}>{placar}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.label}>Valor da Aposta:</Text>
        <Text style={styles.value}>R$ {valor}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Prêmio:</Text>
        <Text style={styles.premio}>R$ {premio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#080e1a",
    padding: 20,
    borderRadius: 16,
    margin: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 16,
    
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    color: "#9fa5b3",
    fontSize: 16,
  },
  value: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  premio: {
    color: "#f1b90b",
    fontSize: 20,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#31353b",
    marginVertical: 10,
  },
});