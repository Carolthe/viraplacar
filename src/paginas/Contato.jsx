import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import VoltarInicial from '../componentes/VoltarInicial';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviar = () => {
    if (!nome || !email || !mensagem) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    Alert.alert('Sucesso', 'Mensagem enviada com sucesso!');

    // limpar campos
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <ScrollView style={styles.containerPrincipal} >
      <VoltarInicial />
    <View style={styles.container}>
      <Text style={styles.titulo}>Relate Seu Problema</Text>
      <Text style={styles.descricao}>Entraremos em Contato com você</Text>
      {/* Nome */}
      <View style={styles.campo}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
          placeholderTextColor="#9ca3af"
        />
      </View>

      {/* Email */}
      <View style={styles.campo}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Digite seu e-mail"
          placeholderTextColor="#9ca3af"
        />
      </View>
      {/* Telefone */}
      <View style={styles.campo}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="telefone"
          placeholder="Digite seu telefone"
          placeholderTextColor="#9ca3af"
        />
      </View>

      {/* Mensagem */}
      <View style={styles.campo}>
        <Text style={styles.label}>Mensagem</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={mensagem}
          onChangeText={setMensagem}
          placeholder="Digite sua mensagem"
          placeholderTextColor="#9ca3af"
          multiline
          numberOfLines={5}
        />
      </View>

      {/* Botão */}
      <TouchableOpacity style={styles.botao} onPress={enviar}>
        <Text style={styles.botaoTexto}>Enviar Mensagem</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    backgroundColor: '#0e0e0e',
    height: '100vh',
    paddingTop: 10,
    paddingBottom: 150,
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#0f172a',
    padding: 20,
    borderRadius: 16,
    paddingVertical: 60,
  },

  titulo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  descricao: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
  },

  campo: {
    marginBottom: 15,
  },

  label: {
    color: '#e5e7eb',
    marginBottom: 6,
    fontSize: 16,
  },

  input: {
    backgroundColor: '#1e293b',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#374151',
  },

  textArea: {
    height: 120,
    textAlignVertical: 'top', // importante no Android
  },

  botao: {
    backgroundColor: '#22c55e',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
  },

  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 17,
  },
});