import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}> {/* Lado esquerdo */}
      <Text style={styles.logo}>ViraPlacar</Text> {/* Lado direito */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entre em Contato</Text>
      </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#0f172a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  logo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#22c55e',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});