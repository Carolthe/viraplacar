import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import api from "../services/api";

export default function CardFormularioPix({ id_aposta, onGerar }) {
  const [pixKey, setPixKey] = useState("");
  const [name, setName] = useState("");

  const isFormValid = pixKey.trim() !== "" && name.trim() !== "";

  const handleGenerate = async () => {
    if (!isFormValid) return;

    try {
      console.log("ID APOSTA:", id_aposta);
      console.log("PIX:", pixKey);
      console.log("NOME:", name);
      await api.post(
        "/apostas/pagar",
        {
          id_aposta: id_aposta, 
          pix_pagamento: pixKey,
          titular_banco: name,
        },
        { withCredentials: true }
      );

      console.log("PIX Key:", pixKey);
      console.log("Nome:", name);

      // 🔥 MOSTRAR QR CODE
      onGerar && onGerar();

    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados para Pagamento</Text>
      <Text style={styles.subtitle}>
        Informe seus dados para gerar o código PIX
      </Text>

      <Text style={styles.label}>Sua Chave PIX</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF, Email, Telefone ou chave aleatória"
        placeholderTextColor="#aaa"
        value={pixKey}
        onChangeText={setPixKey}
      />
      <Text style={styles.helper}>
        Chave PIX da conta que fará o pagamento
      </Text>

      <Text style={styles.label}>Nome do Titular</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome como consta no cartão/conta"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.helper}>
        Nome que consta no cartão/conta que fará o pagamento
      </Text>

      <TouchableOpacity
        style={[
          styles.button,
          !isFormValid && styles.buttonDisabled,
        ]}
        onPress={handleGenerate}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>Gerar QR Code PIX</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#080e1a",
    padding: 15,
    borderRadius: 16,
    marginHorizontal: 5,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "#2e323d",
    paddingBottom: 40,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    color: "#ccc",
    marginBottom: 10,
    fontSize: 16,
  },
  label: {
    color: "#fff",
    fontWeight: "600",
    marginTop: 10,
    fontSize: 16,
  },
  input: {
    backgroundColor: "#0f1d2a",
    color: "#fff",
    borderRadius: 10,
    padding: 15,
    marginTop: 8,
    fontSize: 15,
  },
  helper: {
    color: "#aaa",
    fontSize: 15,
    marginTop: 4,
  },
  button: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  //   buttonDisabled: {
  //     backgroundColor: "#1e7f4f",
  //     opacity: 0.6,
  //   },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },
});