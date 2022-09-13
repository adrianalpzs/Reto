import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { View } from "react-native-animatable";
import {TailwindProvider} from "tailwindcss-react-native";
import HomeScreen from './screens/HomeScreen';
import PredictionScreen from "./screens/PredictionScreen";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import SelectionScreen from "./screens/SelectionScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name='EQUIPO 5' component={HomeScreen} options={{headerTintColor: "#FFFFFF", headerStyle:{backgroundColor: "#000000"}}}/>
          <Stack.Screen name='Screen 1' component={Screen1}
            options={{presentation: 'modal', headerShown: false}}/>
          <Stack.Screen name='Screen 2' component={Screen2}
            options={{presentation: 'modal', headerShown: false}}/>
          <Stack.Screen name='Prediction' component={PredictionScreen}
            options={{presentation: 'modal', headerShown: false}}/>
          <Stack.Screen name='Selection' component={SelectionScreen}
            options={{presentation: 'modal', headerShown: false}}/>
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
/*
<Stack.Screen name='Screen 1' component={Screen1}
options={{presentation: 'modal', headerShown: false}}/>
<Stack.Screen name='Screen 2' component={Screen2}
options={{presentation: 'modal', headerShown: false}}/>
*/