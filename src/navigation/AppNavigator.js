// AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "../screens/Auth/GetStartedScreen";
import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen"; // Importa la nueva pantalla
import FeedScreen from "../screens/FeedScreen"; // Importa la nueva pantalla
import ProfileScreen from "../screens/ProfileScreen"; // Importa la nueva pantalla

const Stack = createStackNavigator(); // Agrega esta línea para crear el stack navigator

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      {/* Nueva pantalla */}
      <Stack.Screen name="Feed" component={FeedScreen} />
      {/* Nueva pantalla */}
      <Stack.Screen name="Profile" component={ProfileScreen} />
      {/* Nueva pantalla */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
