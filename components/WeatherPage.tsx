import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { CalendarDaysIcon, MagnifyingGlassIcon, XMarkIcon } from "react-native-heroicons/outline";

import * as Loc from "expo-location";
import { StatusBar } from "expo-status-bar";
import { weatherIcons } from "../constants";
import * as Progress from "react-native-progress";
import { Location, Weather } from "../types/types";
import { fetchForecast, fetchLocations } from "../api/weather";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { Image, SafeAreaView, TextInput, TouchableOpacity, View, Text, ScrollView, Keyboard } from "react-native";

export default function WeatherPage() {
   const defaultCity = "Eskisehir";
   const [loading, setLoading] = useState(false);
   const [isFocused, setIsFocused] = useState(false);
   const [weather, setWeather] = useState<Weather>();
   const [locations, setLocations] = useState<Location[]>([]);

   useEffect(() => {
      const getPermission = async () => {
         setLoading(true);
         let { status } = await Loc.requestForegroundPermissionsAsync();
         if (status !== "granted") {
            fetchForecast(defaultCity).then((res) => {
               setWeather(res);
               setLoading(false);
            });
            return;
         }
         let curLoc = await Loc.getCurrentPositionAsync({});
         let queryString = curLoc.coords.latitude.toString() + "," + curLoc.coords.longitude.toString();
         fetchLocations(queryString).then((data) => {
            fetchForecast(data[0].name).then((res) => {
               setWeather(res);
               setLoading(false);
            });
         });
      };
      getPermission();
   }, []);

   const handleSearch = (val: string) => {
      if (val.length > 2) {
         fetchLocations(val).then((data) => {
            setLocations(data);
         });
      }
   };

   const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

   const textInputAnimatedStyle = useAnimatedStyle(() => {
      return {
         opacity: withTiming(isFocused ? 1 : 0, { duration: 300 }),
         transform: [{ translateX: withTiming(isFocused ? 0 : 300) }],
      };
   });

   const handleLocation = (loc: Location) => {
      setLocations([]);
      Keyboard.dismiss();
      setIsFocused(false);
      setLoading(true);
      fetchForecast(loc.name).then((data) => {
         setWeather(data);
         setLoading(false);
      });
   };

   const getIcon = (text: string, icon: string) => {
      if (text === "Açık" || text === "Güneşli") return weatherIcons(text);
      else {
         if (icon && icon.includes("night")) return weatherIcons(text + "-gece");
         else return weatherIcons(text);
      }
   };

   return (
      <View className="flex-1 relative">
         <StatusBar style="dark" />
         <Image source={require("../assets/images/bg.png")} blurRadius={15} className="absolute w-full h-full" />
         {loading ? (
            <View className="flex-1 flex-row justify-center items-center">
               <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2" />
            </View>
         ) : (
            <SafeAreaView className="flex flex-1">
               {/* search bar */}
               <View style={{ height: "7%" }} className="mx-4 relative z-50">
                  <Animated.View style={[textInputAnimatedStyle]} className="rounded-full bg-white/20">
                     <TextInput onChangeText={handleTextDebounce} className="h-10 pl-5" placeholder="Bir şehir seçiniz..." placeholderTextColor="rgb(71 85 105)" />
                  </Animated.View>
                  <View className="absolute right-2">
                     <TouchableOpacity className={`${!isFocused && "bg-white/20 rounded-full"} p-2`} onPress={() => setIsFocused(!isFocused)}>
                        {isFocused ? <XMarkIcon color="white" /> : <MagnifyingGlassIcon color="white" />}
                     </TouchableOpacity>
                  </View>
                  {locations.length > 0 && isFocused && (
                     <View className="absolute w-full bg-gray-300 top-12 rounded-xl z-50">
                        {locations.map((loc, index) => (
                           <TouchableOpacity
                              onPress={() => handleLocation(loc)}
                              key={index}
                              className={`flex-row items-center border-0 p-3 px-4 mb-1 ${index + 1 !== locations.length ? "border-b border-gray-400" : ""}`}
                           >
                              <Text>
                                 {loc.name}, {loc.country}
                              </Text>
                           </TouchableOpacity>
                        ))}
                     </View>
                  )}
               </View>
               {/* current weather */}
               <View className="mx-4 mt-10 mb-5">
                  <View>
                     <Text className="text-center text-white text-3xl font-bold">
                        {weather?.location.name},<Text className="text-xl font-semibold text-white/75">{weather?.location.country}</Text>
                     </Text>
                  </View>
                  <View className="flex items-center">
                     <Image className="w-52 h-52" source={getIcon(weather?.current.condition.text!, weather?.current.condition.icon!)} />
                  </View>
               </View>
               <View className="max-w-sm mx-auto my-3 bg-white/20 p-2 rounded-lg">
                  <Text className="text-gray-700 text-2xl text-center">{weather?.current.condition.text}</Text>
               </View>
               <View className="mx-4 flex flex-row space-x-1 my-5 items-center justify-center">
                  <View className="w-28 aspect-square bg-white/30 rounded-lg items-center justify-center space-y-2 p-1">
                     <Image className="w-8 h-8" source={require("../assets/icons/drop.png")} />
                     <Text className="text-gray-800">{weather?.current.humidity}%</Text>
                  </View>
                  <View className="w-40 aspect-square bg-white/20 rounded-xl items-center justify-center">
                     <Text className="text-7xl text-center ml-5 text-gray-800">{Math.round(weather?.current.temp_c!)}&#176;</Text>
                  </View>
                  <View className="w-28 aspect-square bg-white/30 rounded-lg items-center justify-center space-y-2 p-1">
                     <Image className="w-8 h-8" source={require("../assets/icons/wind.png")} />
                     <Text className="text-gray-800">{weather?.current.wind_kph}km</Text>
                  </View>
               </View>
               <View className="my-2 space-y-3 mx-auto">
                  <View className="flex-row items-center mx-5 space-x-2 bg-white/20 rounded-xl w-36 p-2">
                     <CalendarDaysIcon size={22} color={"rgb(75 85 105)"} />
                     <Text className="text-slate-500 text-base">Günlük Tahmin</Text>
                  </View>
                  <ScrollView className="space-x-3" horizontal contentContainerStyle={{ paddingHorizontal: 15 }} showsHorizontalScrollIndicator={false}>
                     {weather &&
                        weather?.forecast.forecastday.map((forecast, index) => (
                           <View key={index} className="flex items-center justify-center py-3 w-20 rounded-2xl bg-white/20 space-y-3">
                              <Image className="w-11 h-11" source={getIcon(forecast.day.condition.text, forecast.day.condition.icon)} />
                              <Text>{new Date(forecast.date).toLocaleDateString("tr-TR", { weekday: "long" })}</Text>
                              <Text>
                                 {Math.round(forecast.day.mintemp_c)}&#176; / {Math.round(forecast.day.maxtemp_c)}&#176;
                              </Text>
                           </View>
                        ))}
                  </ScrollView>
               </View>
            </SafeAreaView>
         )}
      </View>
   );
}
