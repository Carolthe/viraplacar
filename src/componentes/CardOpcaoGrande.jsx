import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CardOpcoesGrande({ imagem, titulo, descricao, textoExtra, textoBotao, onPress }) {
  return (
    <View style={styles.container}>
      {/* Linha principal: imagem + textos */}
      <View style={styles.row}>
        <Image source={imagem} style={styles.imagem} />
        
        <View style={styles.textContainer}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.descricao}>{descricao}</Text>
        </View>
      </View>

      {/* Parte inferior centralizada: texto extra + botão */}
      <View style={styles.footer}>
        <Text style={styles.textoExtra}>{textoExtra}</Text>
        
        <TouchableOpacity style={styles.botao} onPress={onPress} activeOpacity={0.8}>
          <Text style={styles.botaoTexto}>{textoBotao}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 309,
    backgroundColor: '#1f2937',
    borderRadius: 16,
    padding: 16,
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    marginVertical: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  imagem: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 16,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  titulo: {
    color: '#f9fafb',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  descricao: {
    color: '#d1d5db',
    fontSize: 14,
  },

  footer: {
    alignItems: 'center', // centraliza tudo dentro do footer
  },

  textoExtra: {
    color: '#9ca3af',
    fontSize: 13,
    marginBottom: 12,
    textAlign: 'center',
  },

  botao: {
    backgroundColor: '#22c55e',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },

  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});