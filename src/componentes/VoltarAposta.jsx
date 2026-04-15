import { View, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function VoltarAposta (){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Pressable onPress={() => navigation.replace('PlacarJogo')}>
                <Image source={require('../assets/voltar.png')} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})