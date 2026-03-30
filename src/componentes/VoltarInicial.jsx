import { View, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function VoltarInicial (){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Pressable onPress={() => navigation.replace('Home')}>
                <Image source={require('../assets/voltar.png')} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 15,
  },
})