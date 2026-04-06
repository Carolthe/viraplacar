import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("https://SEU_BACKEND/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao fazer login");
      }

      Alert.alert("Sucesso", "Login realizado!");

      // navigation.navigate("Home");

    } catch (error) {
      Alert.alert("Erro", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <Text style={styles.subtitle}>
        Digite suas credenciais para acessar sua conta
      </Text>

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="seu@email.com"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      {/* Senha */}
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Esqueceu senha */}
      <TouchableOpacity
        onPress={() => navigation?.navigate("RecoverPassword")}
      >
        <Text style={styles.forgot}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      {/* Criar conta */}
      <TouchableOpacity
        onPress={() => navigation?.navigate("Register")}
      >
        <Text style={styles.register}>
          Não tem uma conta?{" "}
          <Text style={styles.registerHighlight}>Criar conta</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071a12",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 10,
  },

  label: {
    color: "#fff",
    marginBottom: 5,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#0f2a20",
    padding: 15,
    borderRadius: 10,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#2ecc71",
  },

  forgot: {
    color: "#2ecc71",
    textAlign: "right",
    marginTop: 10,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  register: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },

  registerHighlight: {
    color: "#2ecc71",
    fontWeight: "bold",
  },
});