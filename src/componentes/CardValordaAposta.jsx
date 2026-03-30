import { View, Text, StyleSheet } from "react-native";

export default function CardValordaAposta() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.texto}>
        O valor do prêmio muda conforme mais pessoas apostam.
      </Text>

      <Text style={styles.texto}>
        Se mais de uma pessoa acertar, o valor do prêmio é dividido entre os vencedores.
      </Text>

      <View style={styles.divisor} /> 

      <Text style={styles.label}>Valor do Prêmio:</Text>

      <Text style={styles.valor}>R$ 0,00</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 20,
    marginVertical: 15,
    marginBottom: 50,
    // sombra leve
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },

  texto: {
    color: '#9ca3af',
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 20,
  },

  divisor: {
    height: 1,
    backgroundColor: '#374151', // linha divisória (substitui <hr/>)
    marginVertical: 15,
  },

  label: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },

  valor: {
    color: '#22c55e', // verde destaque
    fontSize: 28,
    fontWeight: 'bold',
  },
});