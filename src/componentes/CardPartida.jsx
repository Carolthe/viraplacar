import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CardBandeira from "../componentes/CardBandeira";

const { width } = Dimensions.get("window");

export default function CardPartida({
  navigation,

  // 🔥 Props dinâmicas
  teamA,
  teamB,
  matchTime,
  matchDate,
  gradientColors = ["#1e3a8a", "#111827"], // default
}) {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        {/* Bandeiras */}
        <View style={styles.flagsContainer}>
          <CardBandeira
            nome={teamA.nome}
            imagem={teamA.imagem}
            onPressBotao={() => navigation.replace("FormularioAposta")}
          />

          <Text style={styles.vs}>VS</Text>

          <CardBandeira
            nome={teamB.nome}
            imagem={teamB.imagem}
            onPressBotao={() => navigation.replace("FormularioAposta")}
          />
        </View>

        {/* Hora + Data */}
        <View style={styles.dateTimeContainer}>
          <Text style={styles.time}>{matchTime}</Text>
          <Text style={styles.date}>{matchDate}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginTop: 20,
  },

  container: {
    width: width * 0.9,
    height: 220,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 15,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 12,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  flagsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
  },

  vs: {
    color: "#e5e7eb",
    fontSize: 14,
    fontWeight: "600",
  },

  dateTimeContainer: {
    alignItems: "center",
  },

  time: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },

  date: {
    fontSize: 14,
    color: "#d1d5db",
    marginTop: 2,
    textTransform: "capitalize",
  },
});