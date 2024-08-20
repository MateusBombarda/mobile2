// StackNavigator.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from "../telas/Login";
import Registrar from "../telas/Registrar";

//  configurar  - <Stack.Screen name="Home" component={Home}/>
const Stack = createNativeStackNavigator();

export default function app () {
  return ( 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registrar" component={Registrar}/>     
    </Stack.Navigator>
  )
}