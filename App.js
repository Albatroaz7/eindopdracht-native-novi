import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";

import Homepage from "./Screens/Homepage";
import Movies from "./Screens/Movies";

const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={Homepage} />
       <Stack.Screen name="Movies" component={Movies} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}
