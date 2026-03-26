import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CardOpcoes({ titulo, imagem, onPress }) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.card}>
        <Image source={imagem} style={styles.image} />
        <Text style={styles.texto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
  },

  card: {
    height: 140,
    width: 115,
    backgroundColor: '#1f2937',
    borderRadius: 18,

    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,

    // sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    // sombra Android
    elevation: 8,

    borderWidth: 1,
    borderColor: '#374151',
  },

  image: {
    width: 40,
    height: 40,
    marginBottom: 12,
    resizeMode: 'contain',
  },

  texto: {
    color: '#f9fafb',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
});