import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import Pagamento from '../componentes/Pagamento';
import VoltarInicial from '../componentes/VoltarInicial';
import Toast from 'react-native-toast-message';

export default function FormularioAposta() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');
  const [nomePagamento, setNomePagamento] = useState('');
  const [pix, setPix] = useState('');
  const [showTimes, setShowTimes] = useState(false);
  const [apostaEnviada, setApostaEnviada] = useState(false);
  const [gols, setGols] = useState('');

  const times = ['Brasil', 'Argentina', 'França', 'Alemanha'];

  // ✅ Função para validar gols (0 a 10)
  const validarGols = (text) => {
    let numero = text.replace(/[^0-9]/g, '');

    if (numero === '') {
      setGols('');
      return;
    }

    let valor = parseInt(numero, 10);

    if (valor > 10) valor = 10;

    setGols(String(valor));
  };

  const enviar = () => {
    if (!nome || !telefone || !time || !pix || !nomePagamento || !gols) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Preencha todos os campos obrigatórios!',
      });
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailValido.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'E-mail inválido',
        text2: 'Digite um e-mail válido!',
      });
      return;
    }

    Toast.show({
      type: 'success',
      text1: 'Aposta Enviada!',
    });

    // Limpar campos
    setNome('');
    setTelefone('');
    setEmail('');
    setTime('');
    setPix('');
    setNomePagamento('');
    setGols('');

    setTimeout(() => {
      setApostaEnviada(true);
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.containerPrincipal}>
      <VoltarInicial />

      {!apostaEnviada ? (
        <View style={styles.container}>
          <Text style={styles.titulo}>Escolher o Vencedor da Copa do Mundo</Text>

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
              onChangeText={(text) => {
                const somenteNumeros = text.replace(/[^0-9]/g, '');
                setTelefone(somenteNumeros);
              }}
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

          {/* Gols */}
          <View style={styles.campo}>
            <Text style={styles.label}>
              Quantos gols o time vencedor vai fazer? (Obrigatório)
            </Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={gols}
              onChangeText={validarGols}
              placeholder="0 a 10"
              placeholderTextColor="#9ca3af"
              maxLength={2}
            />
          </View>

          {/* Nome do cartão */}
          <View style={styles.campo}>
            <Text style={styles.label}>
              Nome que consta no cartão de pagamento (obrigatório)
            </Text>
            <TextInput
              style={styles.input}
              value={nomePagamento}
              onChangeText={setNomePagamento}
            />
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

          <Text style={styles.aviso}>
            Aviso: Digite todos os dados corretos
          </Text>

          {/* Botão */}
          <TouchableOpacity style={styles.botao} onPress={enviar}>
            <Text style={styles.botaoTexto}>Enviar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Pagamento />
      )}

      <Toast />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flexGrow: 1,
    backgroundColor: '#0e0e0e',
    paddingTop: 10,
    paddingBottom: 50,
  },
  container: {
    width: '90%',
    backgroundColor: '#0f172a',
    borderRadius: 16,
    padding: 20,
    paddingVertical: 40,
    paddingBottom: 55,
    alignSelf: 'center',
    marginTop: 5,
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
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
  aviso: {
    color: 'red',
    fontSize: 15,
  },
});