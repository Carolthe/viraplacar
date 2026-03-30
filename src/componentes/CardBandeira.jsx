import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CardBandeira({ nome, imagem, onPressBotao }) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPressBotao}
    >
      <Image source={imagem} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 120,
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 12,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  imagem: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  nome: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});