import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CalculoPremio() {
    const navigation = useNavigation();

    const [golsBrasil, setGolsBrasil] = useState("");
    const [golsPanama, setGolsPanama] = useState("");
    const [valor, setValor] = useState("");

    const odd = 2.13;
    const valorNumerico = parseFloat(valor || 0);
    const premio = (valorNumerico * odd).toFixed(2);

    const placar =
        golsBrasil !== "" && golsPanama !== ""
            ? `${golsBrasil} x ${golsPanama}`
            : null;

    const handleAposta = () => {
        if (!placar || !valor || valorNumerico <= 0) {
            Alert.alert("Erro", "Preencha o placar e insira um valor válido para a aposta");
            return;
        }

        navigation.navigate("PagamentoPix", {
            jogo: "Brasil vs Panamá",
            placar,
            valor,
            premio,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.team}>
                    <Text style={styles.sigla}>BR</Text>
                    <Text style={styles.nome}>Brasil</Text>
                </View>

                <Text style={styles.vs}>VS</Text>

                <View style={styles.team}>
                    <Text style={styles.sigla}>PA</Text>
                    <Text style={styles.nome}>Panamá</Text>
                </View>
            </View>

            <View style={styles.scoreContainer}>
                <TextInput
                    style={styles.scoreInput}
                    keyboardType="numeric"
                    value={golsBrasil}
                    onChangeText={setGolsBrasil}
                    placeholder="0"
                    placeholderTextColor="#666"
                />
                <Text style={styles.x}>X</Text>
                <TextInput
                    style={styles.scoreInput}
                    keyboardType="numeric"
                    value={golsPanama}
                    onChangeText={setGolsPanama}
                    placeholder="0"
                    placeholderTextColor="#666"
                />
            </View>

            <Text style={styles.label}>Valor da Aposta (R$)</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={valor}
                onChangeText={setValor}
                placeholder="100"
                placeholderTextColor="#666"
            />

            <View style={styles.prizeBox}>
                <Text style={styles.prizeLabel}>Valor do Prêmio:</Text>
                <Text style={styles.prizeValue}>R$ {premio}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleAposta}>
                <Text style={styles.buttonText}>Fazer Aposta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#080e1a",
        padding: 20,
        borderRadius: 16,
        width: "90%",
        alignSelf: "center",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    team: {
        alignItems: "center",
    },
    sigla: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
    },
    nome: {
        color: "#fff",
        fontSize: 16,
    },
    vs: {
        color: "#aaa",
        fontSize: 18,
        fontWeight: "bold",
    },
    scoreContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    scoreInput: {
        backgroundColor: "#0f1d2a",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        minWidth: 60,
    },
    x: {
        color: "#aaa",
        marginHorizontal: 10,
        fontSize: 18,
    },
    label: {
        color: "#fff",
        marginBottom: 5,
    },
    input: {
        borderWidth: 2,
        borderColor: "#2e7acc",
        borderRadius: 10,
        padding: 10,
        color: "#fff",
        fontSize: 18,
        marginBottom: 20,
    },
    prizeBox: {
        backgroundColor: "#0f102a",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 20,
    },
    prizeLabel: {
        color: "#aaa",
        marginBottom: 5,
    },
    prizeValue: {
        color: "#f1c40f",
        fontSize: 28,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#2ecc71",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});