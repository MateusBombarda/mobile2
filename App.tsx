import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./src/telas/Login";
import Registrar from "./src/telas/Registrar";
//import StackNavigator from './src/component/StackerNavigator';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registrar" component={Registrar}/>   
      </Stack.Navigator> 
   </NavigationContainer>
  );
}



