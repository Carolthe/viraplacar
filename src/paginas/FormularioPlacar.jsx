import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import Pagamento from '../componentes/Pagamento';
import VoltarInicial from '../componentes/VoltarInicial';
import Toast from 'react-native-toast-message';

export default function FormularioAposta() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const [corinthians, setCorinthians] = useState('');
  const [palmeiras, setPalmeiras] = useState('');

  const [pix, setPix] = useState('');
  const [nomePagamento, setNomePagamento] = useState('')
  const [apostaEnviada, setApostaEnviada] = useState(false);

  const [inputAtivo, setInputAtivo] = useState(null);

  // Validar placar (0 a 10)
  const validarNumero = (text, setter) => {
    let numero = text.replace(/[^0-9]/g, '');
    if (numero === '') {
      setter('');
      return;
    }
    let valor = parseInt(numero, 10);
    if (valor > 10) valor = 10;
    setter(String(valor));
  };

  const camposPreenchidos = () => {
    return nome && telefone && corinthians !== '' && palmeiras !== '' && pix && nomePagamento !== '';
  };

  const enviar = () => {
    if (!camposPreenchidos()) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Preencha os campos obrigatórios!',
      });
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailValido.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'E-mail inválido',
        // text2: 'Digite um e-mail válido!',
      });
      return;
    }

    Toast.show({
      type: 'success',
      text1: 'Jogo Enviado!',
      // text2: `Corinthians ${corinthians} x ${palmeiras} Palmeiras\nRedirecionando...`,
    });

    // limpar campos
    setNome('');
    setTelefone('');
    setEmail('');
    setCorinthians('');
    setPalmeiras('');
    setPix('');

    // ⏳ delay de 10 segundos
    setTimeout(() => {
      setApostaEnviada(true);
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.containerPrincipal}>
      <VoltarInicial />

      {!apostaEnviada ? (
        <View style={styles.container}>
          <Text style={styles.titulo}>Placar do Jogo</Text>

          {/* Nome */}
          <View style={styles.campo}>
            <Text style={styles.label}>Seu Nome (obrigatório)</Text>
            <TextInput
              style={[styles.input, inputAtivo === 'nome' && styles.inputAtivo]}
              value={nome}
              onFocus={() => setInputAtivo('nome')}
              onBlur={() => setInputAtivo(null)}
              onChangeText={setNome}
            />
          </View>

          {/* Telefone */}
          <View style={styles.campo}>
            <Text style={styles.label}>Seu Telefone (obrigatório)</Text>
            <TextInput
              style={[styles.input, inputAtivo === 'telefone' && styles.inputAtivo]}
              keyboardType="phone-pad"
              value={telefone}
              onFocus={() => setInputAtivo('telefone')}
              onBlur={() => setInputAtivo(null)}
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
              style={[styles.input, inputAtivo === 'email' && styles.inputAtivo]}
              keyboardType="email-address"
              value={email}
              onFocus={() => setInputAtivo('email')}
              onBlur={() => setInputAtivo(null)}
              onChangeText={setEmail}
            />
          </View>

          {/* Placar */}
          <View style={styles.campo}>
            <Text style={styles.label}>Placar do Jogo (obrigatório)</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>

              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Brasil</Text>
                <TextInput
                  style={[styles.input, inputAtivo === 'corinthians' && styles.inputAtivo]}
                  keyboardType="numeric"
                  value={corinthians}
                  onFocus={() => setInputAtivo('corinthians')}
                  onBlur={() => setInputAtivo(null)}
                  onChangeText={(text) => validarNumero(text, setCorinthians)}
                  placeholder="0"
                  placeholderTextColor="#9ca3af"
                  maxLength={2}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Panamá</Text>
                <TextInput
                  style={[styles.input, inputAtivo === 'palmeiras' && styles.inputAtivo]}
                  keyboardType="numeric"
                  value={palmeiras}
                  onFocus={() => setInputAtivo('palmeiras')}
                  onBlur={() => setInputAtivo(null)}
                  onChangeText={(text) => validarNumero(text, setPalmeiras)}
                  placeholder="0"
                  placeholderTextColor="#9ca3af"
                  maxLength={2}
                />
              </View>

            </View>
          </View>
          {/* Nome do cartão */}
          <View style={styles.campo}>
            <Text style={styles.label}>Nome que consta no cartão de pagamento (obrigatório)</Text>
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
              style={[styles.input, inputAtivo === 'pix' && styles.inputAtivo]}
              value={pix}
              onFocus={() => setInputAtivo('pix')}
              onBlur={() => setInputAtivo(null)}
              onChangeText={setPix}
            />
          </View>
          <Text style={styles.aviso}>Aviso: Digite todos os dados corretos </Text>

          {/* Botão */}
          <TouchableOpacity
            style={styles.botao}
            onPress={enviar}
            disabled={!camposPreenchidos()}
          >
            <Text style={styles.botaoTexto}>Enviar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Pagamento />
      )}

      {/* 🔥 Toast local */}
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
  inputAtivo: {},
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
    color: '#ec4545',
    fontSize: 15,
  }
});