import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/paginas/Home';
import Contato from './src/paginas/Contato';
import PlacarJogo from './src/paginas/PlacarJogo';
import PagamentoPix from './src/paginas/PagamentoPix';
import Login from './src/paginas/Login';
import CriarConta from './src/paginas/CriarConta';
import RecuperarConta from './src/paginas/RecuperarConta';
import TimeGanhador from './src/paginas/TimeGanhador';
import { AuthProvider } from './src/contexts/AuthContext';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PlacarJogo" component={PlacarJogo} />
          <Stack.Screen name="FormularioContato" component={Contato} />
          <Stack.Screen name="PagamentoPix" component={PagamentoPix} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name='CriarConta' component={CriarConta} />
          <Stack.Screen name='RecuperarSenha' component={RecuperarConta} />
          <Stack.Screen name='TimeGanhador' component={TimeGanhador} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}