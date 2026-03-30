import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/paginas/Home';
import ApostaCampea from './src/paginas/ApostaCampea';
import FormularioAposta from './src/paginas/FormularioAposta';
import Contato from './src/paginas/Contato';
import PlacarJogo from './src/paginas/PlacarJogo';
import VencedorPartida from './src/paginas/VencedorPartida';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ApostaCampea" component={ApostaCampea} />
        <Stack.Screen name="PlacarJogo" component={PlacarJogo} />
        <Stack.Screen name="VencedorPartida" component={VencedorPartida} />
        <Stack.Screen name="FormularioAposta" component={FormularioAposta} />
        <Stack.Screen name="FormularioContato" component={Contato} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}