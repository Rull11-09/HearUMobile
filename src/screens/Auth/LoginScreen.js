// screens/Auth/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica de inicio de sesión aquí
    console.log("Email:", email);
    console.log("Password:", password);
    // Puedes agregar aquí la lógica para autenticar al usuario
    // y navegar a la siguiente pantalla si es exitoso
  };

  return (
    <View style={styles.container}>
      {/* Logo centrado en la parte superior */}
      <Image
        source={require("../../../assets/HearULogo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Iniciar Sesión</Text>

      {/* Campos de entrada para correo electrónico y contraseña */}
      <TextInput
        style={styles.input}
        placeholderTextColor="white" // Color del texto del placeholder
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="white" // Color del texto del placeholder
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      {/* Botón de inicio de sesión */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      {/* Enlace para ir a la pantalla de registro */}
      <Text style={styles.link} onPress={() => navigation.navigate("Register")}>
        ¿No tienes una cuenta? Regístrate aquí.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50, // Ajustado el padding para aumentar el espacio
    backgroundColor: "#333", // Fondo gris oscuro
  },
  logo: {
    width: 150, // Ajustado el tamaño del logo
    height: 150, // Ajustado el tamaño del logo
    marginBottom: 20,
  },
  title: {
    fontSize: 28, // Ajustado el tamaño del título
    marginBottom: 20,
    color: "white", // Texto blanco
  },
  input: {
    width: "100%",
    height: 50, // Ajustado el tamaño de los campos de entrada
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 70,
    marginBottom: 20, // Ajustado el margen inferior de los campos de entrada
    paddingLeft: 10,
    color: "white",
  },
  button: {
    backgroundColor: "red",
    padding: 15, // Ajustado el tamaño del botón
    borderRadius: 70,
    marginTop: 20, // Ajustado el margen superior del botón
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontStyle: "italic",
  },
  link: {
    marginTop: 30, // Ajustado el margen superior del enlace
    color: "white",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
