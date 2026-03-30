import { Text, View, StyleSheet } from "react-native";


export default function CardDescricaoPremio() {
    return (
        <View>
            <Text style={styles.descricao4}>O Valor do Prêmio é Atualizado Semanamalmente, Fique Atento(a) e Boa Sorte!!</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    descricao4: {
        color: '#bbf7d0',
        textAlign: 'center',
        paddingHorizontal: 32,
        marginBottom: 60,
    },
})
