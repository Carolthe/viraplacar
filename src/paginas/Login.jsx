import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert
} from "react-native";
import api from "../services/api";
import VoltarAposta from "../componentes/VoltarAposta";

export default function Login({ navigation, route }) {

  const params = route?.params;

  const [nome, setNome] = useState(""); // ✅ backend usa nome
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);


  const handleLogin = async () => {
    if (!nome || !senha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post(
        "/usuarios/login",
        { nome, senha },
        { withCredentials: true }
      );

      const data = response.data;

      Alert.alert("Sucesso", data.message || "Login realizado!");

      // if (params) {
      //   // 🔥 cria aposta e GUARDA a resposta
      //   const apostaResponse = await api.post(
      //     "/apostas/criar",
      //     {
      //       placar1: params.placar.split(" x ")[0],
      //       placar2: params.placar.split(" x ")[1],
      //       valor: parseFloat(params.valor),
      //     },
      //     { withCredentials: true }
      //   );

      //   // 🔥 pega o ID corretamente
      //   const id_aposta = apostaResponse.data.id_aposta;

      //   console.log("ID APOSTA CRIADA:", id_aposta);

        // 🔥 envia corretamente para próxima tela
        navigation.navigate("Home", {
          ...params,
          // id_aposta,
        });

        console.log("PARAMS NO LOGIN:", params);

      }
     catch (error) {
      console.error(error);

      Alert.alert(
        "Erro",
        error.response?.data?.error || "Erro ao fazer login"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <VoltarAposta/>
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>
        Digite suas credenciais para acessar sua conta
      </Text>

      {/* Nome */}
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        placeholderTextColor="#aaa"
        value={nome}
        onChangeText={setNome}
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
      <TouchableOpacity onPress={() => navigation?.navigate("RecuperarSenha")}>
        <Text style={styles.forgot}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      {/* Criar conta */}
      <TouchableOpacity>
        <Text style={styles.register}>
          Não tem uma conta?{" "}
          <Text
            onPress={() => navigation.replace("CriarConta")}
            style={styles.registerHighlight}
          >
            Criar conta
          </Text>
        </Text>
      </TouchableOpacity>
      <Text style={styles.contatoPlataforma}>Entrar em Contato com a Plataforma</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    paddingTop: 20,
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },

  subtitle: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 10,
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

  forgot: {
    color: "#2ecc71",
    textAlign: "right",
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
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
    fontSize: 16,
  },

  registerHighlight: {
    color: "#2ecc71",
    fontWeight: "bold",
    fontSize: 16,
  },
  contatoPlataforma: {
    color: "#aaa",
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 14, 
    textDecorationLine: 'underline',
  }
});