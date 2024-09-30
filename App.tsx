import { NavigationContainer } from "@react-navigation/native";

import WelcomePage from "./components/WelcomePage";
import WeatherPage from "./components/WeatherPage";
import { RootStackParamList } from "./types/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
   return (
      <NavigationContainer>
         <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="Welcome" component={WelcomePage} />
            <RootStack.Screen name="Weather" component={WeatherPage} />
         </RootStack.Navigator>
      </NavigationContainer>
   );
}
