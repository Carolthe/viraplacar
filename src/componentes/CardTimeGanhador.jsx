import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function CardTimeGanhador() {
  const [selecionado, setSelecionado] = useState(null);
  const [valor, setValor] = useState("");
  const [corInput, setCorInput] = useState("#641e8a");

  const opcoes = ["Vasco da Gama", "Empate", "São Paulo"];

  const premio = 100;
  const loading = false;

  function handleAposta() {
    if (!selecionado || !valor) {
      setCorInput("red"); // erro visual
      return;
    }

    setCorInput("#641e8a"); 
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        {opcoes.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.opcao,
              selecionado === item && styles.opcaoSelecionada,
            ]}
            onPress={() => setSelecionado(item)}
          >
            <Text
              style={[
                styles.textoOpcao,
                selecionado === item && styles.textoSelecionado,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Valor da Aposta (R$)</Text>

      <TextInput
        style={[styles.input, { borderColor: corInput }]}
        keyboardType="numeric"
        value={valor}
        onChangeText={(text) => {
          setValor(text);
          setCorInput("#641e8a"); // remove erro ao digitar
        }}
        placeholderTextColor="#888"
      />

      <View style={styles.prizeBox}>
        <Text style={styles.prizeLabel}>Valor do Prêmio:</Text>
        <Text style={styles.prizeValue}>R$ {premio}</Text>
      </View>

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
    paddingHorizontal: 22,
  },

  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  opcao: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#222",
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  opcaoSelecionada: {
    backgroundColor: "#641e8a",
  },

  textoOpcao: {
    color: "#fff",
  },

  textoSelecionado: {
    fontWeight: "bold",
  },

  label: {
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: "#641e8a",
    borderRadius: 10,
    padding: 14,
    color: "#fff",
    marginBottom: 20,
    fontSize: 16,
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