import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import api from "../services/api";
import VoltarLogin from "../componentes/VoltarLogin";

export default function CriarConta({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pix_receber, setPix_receber] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const handleRegister = async () => {
    setErro("");

    if (!nome || !email || !telefone || !pix_receber || !senha || !confirmarSenha) {
      setErro("Preencha todos os campos");
      return;
    }

    if (senha.length < 6) {
      setErro("Senha deve ter no mínimo 6 caracteres");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem");
      return;
    }

    try {
      setLoading(true);

      await api.post(
        "/usuarios/registro",
        { nome, email, telefone, pix_receber, senha },
        { withCredentials: true }
      );

      navigation.navigate("Login");

    } catch (error) {
      console.error(error);

      const mensagem = error.response?.data?.error?.toLowerCase();

      if (mensagem?.includes("email")) {
        setErro("Email inválido ou já cadastrado");
      } else if (mensagem?.includes("senha")) {
        setErro("Senha inválida");
      } else if (mensagem?.includes("telefone")) {
        setErro("Telefone inválido");
      } else if (mensagem?.includes("nome")) {
        setErro("Nome inválido");
      } else {
        setErro(error.response?.data?.error || "Erro ao criar conta");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VoltarLogin />

      <Text style={styles.title}>Criar Conta</Text>

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      {/* Nome */}
      <Text style={styles.label}>Nome Completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome completo"
        placeholderTextColor="#aaa"
        value={nome}
        onChangeText={setNome}
      />

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="seu@email.com"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Telefone */}
      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        placeholder="(11) 99999-9999"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={telefone}
        onChangeText={(text) => {
          // remove tudo que não for número
          const onlyNumbers = text.replace(/[^0-9]/g, "");
          setTelefone(onlyNumbers);
        }}
      />

      {/* PIX */}
      <Text style={styles.label}>Chave PIX (para receber prêmios)</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF, Email, Telefone ou Aleatória"
        placeholderTextColor="#aaa"
        value={pix_receber}
        onChangeText={setPix_receber}
      />

      {/* Senha */}
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Mínimo 6 caracteres"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Confirmar Senha */}
      <Text style={styles.label}>Confirmar Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a senha novamente"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Criar Conta</Text>
        )}
      </TouchableOpacity>

      {/* Login */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.login}>
          Já tem uma conta? <Text style={styles.loginHighlight}>Entrar</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#0e0e0e",
    flexGrow: 1,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  erro: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 14,
  },

  label: {
    color: "#fff",
    marginBottom: 5,
    marginTop: 10,
    fontSize: 16,
  },

  input: {
    backgroundColor: "#161d29",
    padding: 15,
    borderRadius: 10,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#2e58cc",
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

  login: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },

  loginHighlight: {
    color: "#2ecc71",
    fontWeight: "bold",
  },
});