import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import api from "../services/api";
import VoltarLogin from "../componentes/VoltarLogin";

export default function RecuperarConta({ navigation }) {
  const [email, setEmail] = useState("");
  const [codigo, setCodigo] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [etapa, setEtapa] = useState(1); // 1 = email | 2 = código

  // =========================
  // 📧 ENVIAR CÓDIGO
  // =========================
  const enviarCodigo = async () => {
    if (!email) {
      Alert.alert("Erro", "Informe seu email");
      return;
    }

    try {
      setLoading(true);

      await api.post("/usuarios/recuperar-senha/email", {
        email,
      });

      Alert.alert("Sucesso", "Se o email existir, você receberá um código");
      setEtapa(2);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível enviar o código");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // 🔐 REDEFINIR SENHA
  // =========================
  const redefinirSenha = async () => {
    if (!codigo || !novaSenha || !confirmarSenha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    try {
      setLoading(true);

      await api.post("/usuarios/redefinir-senha", {
        email,
        codigo,
        novaSenha,
      });

      Alert.alert("Sucesso", "Senha redefinida com sucesso!");
      navigation.replace("Login");
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Erro",
        error.response?.data?.error || "Código inválido ou expirado"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
        <VoltarLogin/>
      <Text style={styles.title}>Recuperar Senha</Text>

      {/* ========================= */}
      {/* ETAPA 1 - EMAIL */}
      {/* ========================= */}
      {etapa === 1 ? (
        <>
          <Text style={styles.subtitle}>
            Digite seu email para receber o código
          </Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TouchableOpacity style={styles.button} onPress={enviarCodigo}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Enviar Código</Text>
            )}
          </TouchableOpacity>
        </>
      ) : (
        <>
          {/* ========================= */}
          {/* ETAPA 2 - CÓDIGO + SENHA */}
          {/* ========================= */}

          <Text style={styles.subtitle}>
            Digite o código enviado no seu email
          </Text>

          <Text style={styles.label}>Código</Text>
          <TextInput
            style={styles.input}
            placeholder="123456"
            placeholderTextColor="#aaa"
            value={codigo}
            onChangeText={setCodigo}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Nova Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Nova senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={novaSenha}
            onChangeText={setNovaSenha}
          />

          <Text style={styles.label}>Confirmar Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirme a senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />

          <TouchableOpacity style={styles.button} onPress={redefinirSenha}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Redefinir Senha</Text>
            )}
          </TouchableOpacity>
        </>
      )}

      {/* VOLTAR */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.back}>Voltar para login</Text>
      </TouchableOpacity>
    </View>
  );
}

// =========================
// 🎨 STYLES
// =========================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e0e0e",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    paddingTop: 50,
  },

  subtitle: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 25,
    fontSize: 15,
  },

  label: {
    color: "#fff",
    marginBottom: 5,
    marginTop: 10,
    fontSize: 16,
  },

  input: {
    backgroundColor: "#0d161f",
    padding: 15,
    borderRadius: 10,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#2e3ecc",
  },

  button: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  back: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },
});