import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert, Clipboard } from 'react-native';

export default function Pagamento() {
    const pixKey = 'AaffAfa55a6s';
    //const qrCodeImage = require('../assets/qrcode.png'); // Substitua pelo caminho do seu QR code

    const copiarPix = () => {
        Clipboard.setString(pixKey);
        Alert.alert('Pix Copiado!', 'A chave Pix foi copiada para a área de transferência.');
    };

    const pagamentoFeito = () => {
        Alert.alert('Pagamento Confirmado', 'Obrigado! Seu pagamento foi registrado.');
    };

    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.container}>
                <Text style={styles.text}>Escaneie o QR Code ou copie a nossa chave Pix:</Text>

                <Image source={require('../assets/qrcode.png')} style={styles.qrCode} />

                <Text style={styles.text}>Chave Pix:</Text>

                <View style={styles.campoPix}>
                    <TextInput
                        style={styles.inputPix}
                        value={pixKey}
                        editable={false} // Não permite editar
                    />
                    <TouchableOpacity style={styles.botaoCopiar} onPress={copiarPix}>
                        <Text style={styles.botaoTexto}>Copiar</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textoPreo}>Valor: 5,00</Text>

                <Text style={styles.text}>Depois de feito o pagamento, clique abaixo:</Text>

                <TouchableOpacity style={styles.botaoPagamento} onPress={pagamentoFeito}>
                    <Text style={styles.botaoTexto}>Já Fiz o Pagamento</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
    },
    container: {
        padding: 20,
        backgroundColor: '#0f172a',
        alignItems: 'center',
        width: 350,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        marginVertical: 10,
        textAlign: 'center',
    },
    qrCode: {
        width: 200,
        height: 200,
        marginVertical: 20,
        resizeMode: 'contain',
    },
    campoPix: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginBottom: 20,
    },
    inputPix: {
        backgroundColor: '#1e293b',
        color: '#fff',
        padding: 12,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        borderWidth: 2,
        borderColor: '#374151',
    },
    botaoCopiar: {
        backgroundColor: '#22c55e',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
    },
    botaoTexto: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    textoPreo: {
        color: '#40e67d',
        fontSize: 17,
        fontWeight: 'bold',
    },
    botaoPagamento: {
        backgroundColor: '#224ec5',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 12,
        marginTop: 10,
        width: 300,
        marginBottom: 60,
    },
});