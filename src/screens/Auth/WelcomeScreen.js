// screens/Auth/WelcomeScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Navegar a la pantalla LoginScreen
    navigation.navigate("Login");
  };

  const handleRegister = () => {
    // Navegar a la pantalla RegisterScreen
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      {/* Logo centrado en la parte superior */}
      <Image
        source={require("../../../assets/HearULogo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Welcome to HearU...</Text>
      <Text style={styles.paragraph}>
        Te damos la bienvenida, ¿has usado HearU?
      </Text>
      <View style={styles.buttonContainer}>
        {/* Botones uno al lado del otro */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#222",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "white",
  },
  paragraph: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row", // Alinea los botones en fila
    marginTop: 10,
  },
  button: {
    flex: 1, // Hace que cada botón ocupe el mismo espacio
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  button2: {
    flex: 1, // Hace que cada botón ocupe el mismo espacio
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default WelcomeScreen;
