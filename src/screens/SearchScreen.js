// screens/SearchScreen.js
import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      {/* Logo centrado en la parte superior */}
      <Image
        source={require("../../assets/HearULogo.png")}
        style={styles.logo}
      />

      {/* Barra de búsqueda */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Botón de búsqueda */}
      <TouchableOpacity style={styles.searchButton} onPress={() => {}}>
        <Text style={styles.searchButtonText}>Buscar</Text>
      </TouchableOpacity>

      {/* Mostramos los resultados de la búsqueda */}
      <Text style={styles.resultsText}>Resultados de la búsqueda:</Text>
      {searchResults.map((result) => (
        <Text key={result.id} style={styles.resultItem}>
          {result.name}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#222", // Color de fondo de otras pantallas
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "#999", // Color del borde de la barra de búsqueda
    borderWidth: 1,
    borderRadius: 20, // Bordes redondeados
    marginBottom: 20,
    paddingHorizontal: 15,
    width: "100%", // Ancho completo
  },
  searchButton: {
    backgroundColor: "red", // Color rojo para el botón
    borderRadius: 10, // Bordes redondeados
    paddingVertical: 10,
    alignItems: "center",
    width: "100%", // Ancho completo
  },
  searchButtonText: {
    color: "white", // Texto blanco para el botón
    fontSize: 16,
  },
  resultsText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  resultItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default SearchScreen;
