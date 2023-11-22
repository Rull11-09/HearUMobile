// screens/Auth/GetStartedScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const GetStartedScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    // Navegar a la pantalla WelcomeScreen
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/HearULogo.jpg")}
        style={styles.logo}
      />
      <Text style={styles.title}>Best Music Rating App</Text>
      <Text style={styles.description}>
        HearU es la aplicación donde podrás compartir con tus amigos las
        opiniones sobre tus canciones y artistas favoritos.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "black", // Fondo negro
  },

  logo: {
    width: 100, // Ajusta el tamaño de acuerdo a tus necesidades
    height: 100, // Ajusta el tamaño de acuerdo a tus necesidades
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white", // Texto blanco
    marginBottom: 20,
  },
  description: {
    fontSize: 12, // Tamaño más pequeño para el párrafo
    textAlign: "center",
    color: "white", // Texto blanco
    marginBottom: 20,
  },

  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#D90404",
  },
  buttonText: {
    color: "white",
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default GetStartedScreen;
