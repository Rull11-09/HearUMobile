// components/BannerComponent.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const BannerComponent = () => {
  return (
    <View style={styles.container}>
      {/* Contenedor para la imagen y la información */}
      <View style={styles.contentContainer}>
        {/* Imagen del álbum en tendencia */}
        <Image
          source={require("../../assets/trending_album.jpeg")}
          style={styles.image}
        />

        {/* Información sobre el álbum */}
        <View style={styles.infoContainer}>
          <Text style={styles.smallText}>Álbum en Tendencia</Text>
          <Text style={styles.title}>Utopia</Text>
          <Text style={styles.artist}>Travis Scott</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E53C3C", // Fondo rojo oscuro
    borderRadius: 20,
    overflow: "hidden",
    margin: 5,
  },
  contentContainer: {
    flexDirection: "row", // Coloca los elementos en fila (horizontal)
    alignItems: "center", // Alinea los elementos al centro verticalmente
  },
  image: {
    width: "45%",
    height: 150,
    borderRadius: 20,
  },
  infoContainer: {
    flex: 1, // Para que ocupe el espacio restante
    padding: 30,
  },
  smallText: {
    fontSize: 10,
    fontStyle: "italic",
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#fff",
  },
  artist: {
    fontSize: 15,
    color: "#fff",
  },
});

export default BannerComponent;
