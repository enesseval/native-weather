import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { Image, View } from "react-native";
import { RootStackParamList } from "../types/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function WelcomePage() {
   const ring1padding = useSharedValue(0);
   const ring2padding = useSharedValue(0);

   const navigation = useNavigation<WelcomeScreenNavigationProp>();

   useEffect(() => {
      setTimeout(() => (ring1padding.value = withSpring(ring1padding.value + hp(4))), 100);
      setTimeout(() => ((ring2padding.value = withSpring(ring2padding.value + hp(4.5))), 300));

      setTimeout(() => navigation.navigate("Weather"), 2500);
   }, []);

   return (
      <View className="flex-1 items-center justify-center bg-sky-200">
         <Animated.View className="bg-white/20 rounded-full" style={{ padding: ring2padding }}>
            <Animated.View className="bg-white/20 rounded-full" style={{ padding: ring1padding }}>
               <Image source={require("../assets/images/logo.png")} style={{ width: hp(15), height: hp(15) }} />
            </Animated.View>
         </Animated.View>
      </View>
   );
}
