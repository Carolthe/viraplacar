import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import Pagamento from '../componentes/Pagamento';
import VoltarInicial from '../componentes/VoltarInicial';

export default function FormularioAposta() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');
  const [pix, setPix] = useState('');
  const [showTimes, setShowTimes] = useState(false);
  const [apostaEnviada, setApostaEnviada] = useState(false); // controla se o formulário foi enviado

  const times = ['Brasil', 'Argentina', 'França', 'Alemanha'];

  const enviar = () => {
    if (!nome || !telefone || !time || !pix) {
      alert('Preencha os campos obrigatórios!');
      return;
    }
    alert('Aposta enviada!');

    // Limpar os inputs
    setNome('');
    setTelefone('');
    setEmail('');
    setTime('');
    setPix('');

    // Marca que a aposta foi enviada
    setApostaEnviada(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.containerPrincipal}>
      <VoltarInicial/>
      {!apostaEnviada ? (
        <View style={styles.container}>
          <Text style={styles.titulo}>Fazer Aposta</Text>

          {/* Nome */}
          <View style={styles.campo}>
            <Text style={styles.label}>Seu Nome (obrigatório)</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
            />
          </View>

          {/* Telefone */}
          <View style={styles.campo}>
            <Text style={styles.label}>Seu Telefone (obrigatório)</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              value={telefone}
              onChangeText={setTelefone}
            />
          </View>

          {/* Email */}
          <View style={styles.campo}>
            <Text style={styles.label}>Seu E-mail</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Time */}
          <View style={styles.campo}>
            <Text style={styles.label}>Seu Time Escolhido (Obrigatório)</Text>
            <TouchableOpacity
              style={styles.input}
              onPress={() => setShowTimes(!showTimes)}
            >
              <Text style={{ color: time ? '#fff' : '#9ca3af' }}>
                {time || 'Selecione um time'}
              </Text>
            </TouchableOpacity>
            {showTimes && (
              <View style={styles.dropdown}>
                {times.map((item) => (
                  <TouchableOpacity
                    key={item}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setTime(item);
                      setShowTimes(false);
                    }}
                  >
                    <Text style={styles.dropdownText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Pix */}
          <View style={styles.campo}>
            <Text style={styles.label}>Sua Chave Pix (obrigatório)</Text>
            <TextInput
              style={styles.input}
              value={pix}
              onChangeText={setPix}
            />
          </View>

          {/* Botão */}
          <TouchableOpacity style={styles.botao} onPress={enviar}>
            <Text style={styles.botaoTexto}>Enviar Aposta</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Mostrar Pagamento no lugar do formulário
        <Pagamento />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flexGrow: 1,
    backgroundColor: '#0e0e0e',
    paddingTop: 10,
  },
  container: {
    width: '90%',
    backgroundColor: '#0f172a',
    borderRadius: 16,
    padding: 20,
    paddingVertical: 40,
    paddingBottom: 55,
    alignSelf: 'center',
    marginTop: 20,
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 20,
    textAlign: 'center',
  },
  campo: {
    marginBottom: 15,
  },
  label: {
    color: '#e5e7eb',
    marginBottom: 6,
    fontSize: 14,
  },
  input: {
    backgroundColor: '#1e293b',
    color: '#fff',
    borderRadius: 10,
    padding: 12,
    borderWidth: 2,
    borderColor: '#374151',
  },
  dropdown: {
    backgroundColor: '#1f2937',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#374151',
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  dropdownText: {
    color: '#fff',
  },
  botao: {
    backgroundColor: '#22c55e',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});