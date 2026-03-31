import { View, Text, StyleSheet } from "react-native";

export default function AlertPagamentoFeito() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.texto}>
        Iremos aguardar a confirmação do seu pagamento. 
        Guarde o comprovante do seu banco.
      </Text>

      <Text style={styles.texto2}>
        Caso você seja o ganhador, o valor será enviado 
        para o Pix cadastrado.
      </Text>

      <View style={styles.divisor} />

      <Text style={styles.footer}>
        Mundial dos Jogos agradece pela sua participação.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '98%',
    backgroundColor: '#111827', // mesmo fundo
    borderRadius: 16,
    padding: 20,
    marginVertical: 15,

    // sombra igual
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },

  texto: {
    color: '#ffffff', // mesmo cinza
    fontSize: 17,
    marginBottom: 10,
    lineHeight: 20,
    fontWeight: 500,
    textAlign: 'left',
  },
    texto2: {
    color: '#9ca3af', // mesmo cinza
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 20,
    textAlign: 'left',
  },

  divisor: {
    height: 1,
    backgroundColor: '#374151',
    marginVertical: 15,
  },

  footer: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
});