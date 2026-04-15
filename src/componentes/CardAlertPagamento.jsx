import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CardAlertPagamento() {
  return (
    <View style={styles.card}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.iconBox}>
          <Ionicons name="shield-checkmark" size={22} color="#22c55e" />
        </View>

        <Text style={styles.title}>Pagamento em análise</Text>
      </View>

      {/* CONTENT */}
      <Text style={styles.text}>
        Seu pagamento será analisado. Caso você seja o vencedor,
        o valor será enviado para a chave Pix cadastrada.
      </Text>

      {/* INFO BOX */}
      <View style={styles.infoBox}>
        <Ionicons name="information-circle-outline" size={18} color="#60a5fa" />
        <Text style={styles.infoText}>
          Processamento seguro
        </Text>
      </View>

      {/* FOOTER */}
      <Text style={styles.footer}>
        A Mundial dos Jogos te deseja boa sorte!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#071020",
    borderRadius: 18,
    padding: 18,
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#1f2a37",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  iconBox: {
    backgroundColor: "rgba(34, 197, 94, 0.15)",
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
  },

  title: {
    color: "#e5e7eb",
    fontSize: 18,
    fontWeight: "700",
  },

  text: {
    color: "#9ca3af",
    fontSize: 16,
    lineHeight: 20,
  },

  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    padding: 10,
    borderRadius: 10,
    marginTop: 12,
  },

  infoText: {
    color: "#93c5fd",
    fontSize: 13,
    marginLeft: 6,
  },

  footer: {
    color: "#6b7280",
    fontSize: 15,
    marginTop: 14,
    textAlign: "center",
    fontStyle: "italic",
  },
});