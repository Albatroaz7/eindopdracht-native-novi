import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import MovieShow from "./Screens/MovieShow";

import Homepage from "./Screens/Homepage";
import Movies from "./Screens/Movies";

const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={Homepage} />
       <Stack.Screen name="Movies" component={Movies} />
       <Stack.Screen name="MovieShow" component={MovieShow} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}
