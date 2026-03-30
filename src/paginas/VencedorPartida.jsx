import { Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import Header from "../componentes/Header";
import CardInformativo from "../componentes/CardInformativo";
import CardPartida from "../componentes/CardPartida";
import CardValordaAposta from "../componentes/CardValordaAposta";
import { useNavigation } from '@react-navigation/native';
import CardDescricaoPremio from "../componentes/CardDescricaoPremio";

const { height: SCREEN_HEIGHT } = Dimensions.get('window'); // pega altura da tela

export default function VencedorPartida() {
    const navigation = useNavigation();
    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            style={styles.scrollStyle}>
            <Header />
            {/* <Text style={styles.titulo}>Aposta quem vai Ganhar a Partida </Text> */}

            <Text style={styles.descricao3} >Aposte no time que você acredita que será o vencedor:</Text>


            {/* <View style={styles.grid}>
                <CardBandeira nome="Estados Unidos" imagem={require('../assets/eua.png')}
                    onPressBotao={() => navigation.replace('FormularioAposta')} />
                    <Image source={require('../assets/xx.png')}/>
                <CardBandeira nome="Mexíco" imagem={require('../assets/mexico.png')}
                    onPressBotao={() => navigation.replace('FormularioAposta')} />
            </View> */}
            <CardPartida
                navigation={navigation}
                matchTime="19:30"
                matchDate="sábado, 12 agosto"
                 gradientColors={["#28563e", "#111827"]} 
                teamA={{
                    nome: "Brasil",
                    imagem: require("../assets/brasil.png"),
                }}

                teamB={{
                    nome: "Argentina",
                    imagem: require("../assets/argentina.png"),
                }}
            />
            {/* Botão */}
            <TouchableOpacity
                style={styles.botao}
                activeOpacity={0.85}
            >
                <Text style={styles.botaoTexto}>Apostar</Text>
            </TouchableOpacity>
            <Text style={styles.descricao2}>Preço da Aposta:</Text>


            <CardInformativo
                preco="R$ 20,00"
                texto="(A aposta será valida até começar o jogo)"
                img={require('../assets/raio.png')} />
            <CardValordaAposta />
            <CardDescricaoPremio />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollStyle: {
        backgroundColor: '#0e0e0e', // fundo preto que ocupa toda a tela
    },

    scrollContainer: {
        minHeight: SCREEN_HEIGHT, // garante que o conteúdo ocupe toda a altura
        alignItems: 'center',
        paddingBottom: 0,
    },

    titulo: {
        color: '#ffffff',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 10,
        textAlign: 'center',
    },

    descricao: {
        color: '#cedad2',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 55,
        marginHorizontal: 20,
    },
    descricao2: {
        color: 'white',
        marginTop: 15,
        marginBottom: 10,
        fontWeight: 500,
        fontSize: 17,
    },
    descricao3: {
        color: "white",
        marginTop: 10,
        fontSize: 20,
        fontWeight: 500,
        textAlign: 'center',
        paddingHorizontal: 60,
    },
    descricao4: {
        color: '#bbf7d0',
        textAlign: 'center',
        paddingHorizontal: 32,
        marginBottom: 60,
    },
    botao: {
        backgroundColor: '#22c55e',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        width: '80%',

        // glow botão leve
        shadowColor: '#22c55e',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },

    botaoTexto: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap', // 🔑 quebra linha automaticamente
        justifyContent: 'center', // centraliza
        gap: 10,
        marginBottom: 30,
        alignItems: 'center'
    },
});