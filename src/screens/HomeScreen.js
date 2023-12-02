import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import BannerComponent from "../components/BannerComponent";
import SectionComponent from "../components/SectionComponent";
import FooterComponent from "../components/FooterComponent";

// Datos de ejemplo
const dataForNew = [
  {
    id: "1",
    title: "Canción 1",
    artist: "Artista 1",
    image: require("../../assets/NewSong.jpeg"),
  },
  {
    id: "2",
    title: "Canción 2",
    artist: "Artista 2",
    image: require("../../assets/NewSong.jpeg"),
  },
  // Agrega más datos según sea necesario
];

const dataForBestRating = [
  {
    id: "1",
    title: "Mejor Canción 1",
    artist: "Mejor Artista 1",
    image: require("../../assets/best_song1.jpeg"),
  },

  // Agrega más datos según sea necesario
];

const dataForForYou = [
  {
    id: "1",
    title: "Para Ti Canción 1",
    artist: "Para Ti Artista 1",
    image: require("../../assets/foryou_song1.jpeg"),
  },
  // Agrega más datos según sea necesario
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo centrado en la parte superior */}
      <Image
        source={require("../../assets/HearULogo.png")}
        style={styles.logo}
      />

      {/* Contenedor para Banner y Secciones */}
      <View style={styles.contentContainer}>
        {/* Banner con información sobre el álbum en tendencia */}
        <BannerComponent />

        {/* Mostrar cada componente por separado */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[
            { title: "New", data: dataForNew },
            { title: "Best Rating", data: dataForBestRating },
            { title: "For You", data: dataForForYou },
          ]}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <SectionComponent title={item.title} data={item.data} />
          )}
        />
      </View>

      {/* Footer que cubre toda la pantalla */}
      <FooterComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222", // Fondo negro
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1, // Para que ocupe el espacio disponible
    width: "100%", // Ancho completo
  },
});

export default HomeScreen;
