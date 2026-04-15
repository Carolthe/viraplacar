import { useState } from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, ScrollView } from "react-native";
import api from '../services/api';
import VoltarLogin from "../componentes/VoltarLogin";

export default function CriarConta({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pix_receber, setPix_receber] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!nome || !email || !telefone || !pix_receber || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    if (senha.length < 6) {
      Alert.alert("Erro", "Senha deve ter no mínimo 6 caracteres");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    try {
      setLoading(true);
      
      await api.post('/usuarios/registro', { nome, email, telefone, pix_receber, senha },
        { withCredentials: true } // envia cookie HttpOnly se o backend usar
      );

      Alert.alert("Sucesso", "Conta criada com sucesso!");
      navigation.navigate("Login");

    } catch (error) {
      console.error(error);
      const message = error.response?.data?.error || error.message || "Erro ao criar conta";
      Alert.alert("Erro", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VoltarLogin/>
      <Text style={styles.title}>Criar Conta</Text>

      {/* Nome */}
      <Text style={styles.label}>Nome Completo</Text>
      <TextInput style={styles.input} placeholder="Seu nome completo" placeholderTextColor="#aaa" value={nome} onChangeText={setNome} />

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="seu@email.com" placeholderTextColor="#aaa" value={email} onChangeText={setEmail} />

      {/* Telefone */}
      <Text style={styles.label}>Telefone</Text>
      <TextInput style={styles.input} placeholder="(11) 99999-9999" placeholderTextColor="#aaa" keyboardType="phone-pad" value={telefone} onChangeText={setTelefone} />

      {/* PIX */}
      <Text style={styles.label}>Chave PIX (para receber prêmios)</Text>
      <TextInput style={styles.input} placeholder="CPF, Email, Telefone ou Aleatória" placeholderTextColor="#aaa" value={pix_receber} onChangeText={setPix_receber} />

      {/* Senha */}
      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} placeholder="Mínimo 6 caracteres" placeholderTextColor="#aaa" secureTextEntry value={senha} onChangeText={setSenha} />

      {/* Confirmar Senha */}
      <Text style={styles.label}>Confirmar Senha</Text>
      <TextInput style={styles.input} placeholder="Digite a senha novamente" placeholderTextColor="#aaa" secureTextEntry value={confirmarSenha} onChangeText={setConfirmarSenha} />

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Criar Conta</Text>}
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
  container: { padding: 20, backgroundColor: '#0e0e0e', flexGrow: 1 },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  label: { color: "#fff", marginBottom: 5, marginTop: 10, fontSize: 16 },
  input: { backgroundColor: "#161d29", padding: 15, borderRadius: 10, color: "#fff", borderWidth: 1, borderColor: "#2e58cc" },
  button: { backgroundColor: "#2ecc71", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  login: { color: "#aaa", textAlign: "center", marginTop: 20 },
  loginHighlight: { color: "#2ecc71", fontWeight: "bold" },
});