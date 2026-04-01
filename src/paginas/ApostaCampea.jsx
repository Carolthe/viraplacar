import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import Header from "../componentes/Header";
import CardInformativo from "../componentes/CardInformativo";
import CardBandeira from "../componentes/CardBandeira";
import CardValordaAposta from "../componentes/CardValordaAposta";
import { useNavigation } from '@react-navigation/native';
import CardDescricaoPremio from '../componentes/CardDescricaoPremio';

const { height: SCREEN_HEIGHT } = Dimensions.get('window'); // pega altura da tela

export default function ApostaCampea() {
    const navigation = useNavigation();
    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            style={styles.scrollStyle}>
            <Header />
            <Text style={styles.titulo}>Copa do Mundo </Text>
            <Text style={styles.descricao}> Escolha quem vai ganhar a copa e o placar do ganhador</Text>
            <Text style={styles.descricao2}>Valor do Jogo:</Text>
            <CardInformativo
            preco="R$ 10,00"
            texto="(O valor aumenta conforme se aproxima o dia do Jogo Final)"
            img={require('../assets/trofeu.png')} />
            <Text style={styles.descricao3} >Clique na seleção que você acredita que será a campeã:</Text>
            <View style={styles.grid}>
                <CardBandeira nome="Estados Unidos" imagem={require('../assets/eua.png')} 
                        onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Mexíco" imagem={require('../assets/mexico.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')}/> 
                <CardBandeira nome="Canáda" imagem={require('../assets/canada.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Argentina" imagem={require('../assets/argentina.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Brasil" imagem={require('../assets/brasil.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Colombia" imagem={require('../assets/colombia.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Equador" imagem={require('../assets/equador.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Paraguai" imagem={require('../assets/paraguai.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Uruguai" imagem={require('../assets/uruguai.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Australia" imagem={require('../assets/australia.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Irã" imagem={require('../assets/ira.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Japão" imagem={require('../assets/japao.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Jordania" imagem={require('../assets/jordania.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Qatar" imagem={require('../assets/qatar.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Arábia Saudita" imagem={require('../assets/arabiasaudita.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Coreia do Sul" imagem={require('../assets/coreia.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Uzbequistão" imagem={require('../assets/brasil.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Argélia" imagem={require('../assets/argeria.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Cabo Verde" imagem={require('../assets/brasil.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Costa do Marfim" imagem={require('../assets/costamarfim.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Egito" imagem={require('../assets/egito.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Gana" imagem={require('../assets/gana.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Marrocos" imagem={require('../assets/marrocos.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Senegal" imagem={require('../assets/senegal.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="África do Sul" imagem={require('../assets/africasul.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Tunísia" imagem={require('../assets/brasil.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Áustria" imagem={require('../assets/austria.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Bélgica" imagem={require('../assets/belgica.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Croácia" imagem={require('../assets/croacia.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Inglaterra" imagem={require('../assets/inglaterra.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="França" imagem={require('../assets/franca.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Alemanha" imagem={require('../assets/alemanha.png')}
                onPressBotao={() => navigation.replace('FormularioAposta')} />
                <CardBandeira nome="Holanda" imagem={require('../assets/holanda.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Noroega" imagem={require('../assets/brasil.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Portual" imagem={require('../assets/portugal.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Escócia" imagem={require('../assets/escocia.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Espanha" imagem={require('../assets/espanha.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Suiça" imagem={require('../assets/suica.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Curação" imagem={require('../assets/curacao.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Haiti" imagem={require('../assets/haiti.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Panamá" imagem={require('../assets/panama.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
                <CardBandeira nome="Nova Zelandia" imagem={require('../assets/novazelandia.png')} 
                onPressBotao={() => navigation.replace('FormularioAposta')}/>
            </View>
                <CardValordaAposta 
                valor="160,00"
                textoPremio1="O valor do prêmio muda conforme a partida final se aproxima."
                />
                {/* <CardDescricaoPremio /> */}
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
        paddingBottom: 50,
    },

    titulo: {
        color: '#ffffff',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 10,
    },

    descricao: {
        color: '#cedad2',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 55,
        marginHorizontal: 20,
        paddingBottom: 20,
    },
    descricao2: {
        color: 'white', 
        marginBottom: 10,
        fontWeight: 500,
        fontSize: 17,
    },
    descricao3: {
        color: "white",
        marginTop: 18,
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 60,
    }, grid: {
        flexDirection: 'row',
        flexWrap: 'wrap', // 🔑 quebra linha automaticamente
        justifyContent: 'center', // centraliza
        gap: 10,
        marginBottom: 30,
    },
});