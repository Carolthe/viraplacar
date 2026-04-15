import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../services/api";

export default function CalculoPremio({
  id_jogo,
  sigla1,
  sigla2,
  nomeTime1,
  nomeTime2,
  corInput = "#641e8a"
}) {

  const navigation = useNavigation();

  const [gol1, setGol1] = useState("");
  const [gol2, setGol2] = useState("");
  const [valor, setValor] = useState("");
  const [loading, setLoading] = useState(false);
  const [premio, setPremio] = useState("0.00");

  const valorNumerico = parseFloat(valor || 0);

  const placar =
    gol1 !== "" && gol2 !== ""
      ? `${gol1} x ${gol2}`
      : null;

  // ================================
  // 🔥 CALCULO DINÂMICO POR JOGO
  // ================================
  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (
        !valor ||
        valorNumerico <= 0 ||
        !id_jogo ||
        gol1 === "" ||
        gol2 === ""
      ) {
        setPremio("0.00");
        return;
      }

      try {
        const response = await api.post("/apostas/calcular", {
          valor: valorNumerico,
          id_jogo,
          placar1: parseInt(gol1, 10),
          placar2: parseInt(gol2, 10),
        });

        setPremio(response.data.premio);

      } catch (err) {
        if (err.response?.status === 404) {
          setPremio("0.00");
        } else {
          console.log(err);
        }
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [valor, gol1, gol2, id_jogo]);

  // ================================
  // 🔥 CRIAR APOSTA
  // ================================
  const handleAposta = async () => {
    if (!placar || !valor || valorNumerico <= 0 || !id_jogo) {
      Alert.alert("Erro", "Preencha os dados corretamente");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post(
        "/apostas/criar",
        {
          placar1: gol1,
          placar2: gol2,
          valor: valorNumerico,
          id_jogo
        },
        { withCredentials: true }
      );

      Alert.alert("Sucesso", "Aposta realizada!");

      navigation.navigate("PagamentoPix", {
        id_aposta: response.data.id_aposta,
        jogo: `${nomeTime1} vs ${nomeTime2}`,
        placar,
        valor,
        premio: response.data.premio,
      });

    } catch (error) {
      console.error(error);

      if (error.response?.status === 401) {
        Alert.alert("Atenção", "Faça login primeiro");

        navigation.navigate("Login", {
          jogo: `${nomeTime1} vs ${nomeTime2}`,
          placar,
          valor,
          premio,
        });

      } else {
        Alert.alert("Erro", "Erro ao registrar aposta");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>

      {/* ================= HEADER ================= */}
      <View style={styles.header}>
        <View style={styles.team}>
          <Text style={styles.sigla}>{sigla1}</Text>
          <Text style={styles.nome}>{nomeTime1}</Text>
        </View>

        <Text style={styles.vs}>VS</Text>

        <View style={styles.team}>
          <Text style={styles.sigla}>{sigla2}</Text>
          <Text style={styles.nome}>{nomeTime2}</Text>
        </View>
      </View>

      {/* ================= PLACAR ================= */}
      <View style={styles.scoreContainer}>
        <TextInput
          style={styles.scoreInput}
          keyboardType="numeric"
          value={gol1}
          onChangeText={setGol1}
        />

        <Text style={styles.x}>X</Text>

        <TextInput
          style={styles.scoreInput}
          keyboardType="numeric"
          value={gol2}
          onChangeText={setGol2}
        />
      </View>

      {/* ================= VALOR ================= */}
      <Text style={styles.label}>Valor da Aposta (R$)</Text>

      <TextInput
        style={[styles.input, { borderColor: corInput }]}
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      {/* ================= PRÊMIO ================= */}
      <View style={styles.prizeBox}>
        <Text style={styles.prizeLabel}>Valor do Prêmio:</Text>
        <Text style={styles.prizeValue}>R$ {premio}</Text>
      </View>

      {/* ================= BOTÃO ================= */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleAposta}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Jogar</Text>
        )}
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#080e1a",
    padding: 20,
    borderRadius: 16,
    width: "90%",
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  team: {
    alignItems: "center",
  },
  sigla: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  nome: {
    color: "#fff",
    fontSize: 16,
  },
  vs: {
    color: "#aaa",
    fontSize: 18,
    fontWeight: "bold",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  scoreInput: {
    backgroundColor: "#0f1d2a",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    minWidth: 60,
  },
  x: {
    color: "#aaa",
    marginHorizontal: 10,
    fontSize: 18,
  },
  label: {
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: "#641e8a",
    borderRadius: 10,
    padding: 10,
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
  },
  prizeBox: {
    backgroundColor: "#0f102a",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  prizeLabel: {
    color: "#aaa",
    marginBottom: 5,
  },
  prizeValue: {
    color: "#f1c40f",
    fontSize: 28,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});