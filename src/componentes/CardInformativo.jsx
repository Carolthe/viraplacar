import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardInformativo({img, preco, texto}) {
  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.imagem}
      />
      <Text style={styles.valor}>{preco}</Text>

      
      
      <Text style={styles.descricao}>
        {texto}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: "#111827", // mais suave que o anterior'#1f2937'
    borderRadius: 16,
    padding: 20,
    marginVertical: 5,
    height: 200,
    alignItems: 'center',
    paddingTop: 30,
    // sombra leve (clean)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },

  valor: {
    color: 'white', // destaque verde
    fontSize: 32,     // 🔥 maior destaque
    fontWeight: 'bold',
    marginBottom: 10,
  },

  imagem: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 12,
    opacity: 0.8,
  },

  descricao: {
    color: '#e7edf7', // cinza moderno
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 20,
  },
});