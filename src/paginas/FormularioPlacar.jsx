import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import Pagamento from '../componentes/Pagamento';
import VoltarInicial from '../componentes/VoltarInicial';

export default function FormularioAposta() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const [corinthians, setCorinthians] = useState('');
  const [palmeiras, setPalmeiras] = useState('');

  const [pix, setPix] = useState('');
  const [apostaEnviada, setApostaEnviada] = useState(false);

  const [inputAtivo, setInputAtivo] = useState(null);

  // Validação de números de 0 a 10
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

  // Verifica se todos os campos obrigatórios estão preenchidos
  const camposPreenchidos = () => {
    return nome && telefone && corinthians !== '' && palmeiras !== '' && pix;
  };

  const enviar = () => {
    if (!camposPreenchidos()) {
      alert('Preencha os campos obrigatórios!');
      return;
    }

    alert(`Aposta enviada!\nCorinthians ${corinthians} x ${palmeiras} Palmeiras`);

    setNome('');
    setTelefone('');
    setEmail('');
    setCorinthians('');
    setPalmeiras('');
    setPix('');
    setApostaEnviada(true);
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
              onChangeText={setTelefone}
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
            <Text style={styles.label}>Placar do Jogo (0 a 10)</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              
              {/* Corinthians */}
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Corinthians</Text>
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

              {/* Palmeiras */}
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Palmeiras</Text>
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
    fontSize: 14,
  },
  input: {
    backgroundColor: '#1e293b',
    color: '#fff',
    borderRadius: 10,
    padding: 12,
    borderWidth: 2,
    borderColor: '#374151', // cor padrão da borda
  },
  // borda dourada "ouro" ao focar, sem sombra
  inputAtivo: {
   
  },
  botao: {
    backgroundColor: '#22c55e', // mantém verde original
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