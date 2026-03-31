import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Clipboard, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AlertPagamentoFeito from '../componentes/AlertPagamentoFeito.jsx';

const { width, height } = Dimensions.get('window');

export default function Pagamento() {
    const pixKey = 'AaffAfa55a6s';
    const navigation = useNavigation();

    const [copiado, setCopiado] = useState(false);
    const [alertAtivo, setAlertAtivo] = useState(false);
    const [segundosRestantes, setSegundosRestantes] = useState(30 * 60); // 30 minutos em segundos

    const copiarPix = () => {
        Clipboard.setString(pixKey);
        setCopiado(true);

        setTimeout(() => setCopiado(false), 2000);
    };

    const pagamentoFeito = () => {
        setAlertAtivo(true);

        // Redireciona para a tela inicial após 10 segundos
        setTimeout(() => {
            setAlertAtivo(false);
            navigation.navigate('Home'); // coloque o nome correto da tela inicial
        }, 50000);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSegundosRestantes(prev => {
                if (prev > 0) return prev - 1;
                clearInterval(interval);
                return 0;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Converte segundos em mm:ss
    const formatarTempo = (s) => {
        const minutos = Math.floor(s / 60);
        const segundos = s % 60;
        const mm = minutos < 10 ? `0${minutos}` : minutos;
        const ss = segundos < 10 ? `0${segundos}` : segundos;
        return `${mm}:${ss}`;
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
                        editable={false}
                    />
                    <TouchableOpacity style={styles.botaoCopiar} onPress={copiarPix}>
                        <Text style={styles.botaoTexto}>{copiado ? 'Copiado!' : 'Copiar'}</Text>
                    </TouchableOpacity>
                </View>

                {/* Temporizador regressivo */}
                <Text style={styles.text}>Tempo efetivo: {formatarTempo(segundosRestantes)}</Text>

                <Text style={styles.textoPreco}>Valor: 5,00</Text>

                <Text style={styles.text}>Depois de feito o pagamento, clique abaixo:</Text>

                <TouchableOpacity style={styles.botaoPagamento} onPress={pagamentoFeito}>
                    <Text style={styles.botaoTexto}>Já Fiz o Pagamento</Text>
                </TouchableOpacity>
            </View>

            {/* Overlay do AlertPagamentoFeito */}
            {alertAtivo && (
                <View style={styles.overlay}>
                    <View style={styles.alertContainer}>
                        <AlertPagamentoFeito />
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
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
    textoPreco: {
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
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
    alertContainer: {
        width: width * 0.9,
        backgroundColor: '#1f2937',
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
    },
});