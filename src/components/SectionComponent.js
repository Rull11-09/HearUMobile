// components/SectionComponent.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Ejemplo de datos para cada subsección (puedes reemplazarlo con tus propios datos)
const dataForNew = [
  {
    id: "1",
    title: "Canción 1",
    artist: "Artista 1",
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

const SectionComponent = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {/* Lista de elementos en la sección */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemArtist}>{item.artist}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  itemContainer: {
    marginRight: 10,
  },
  itemImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold",
  },
  itemArtist: {
    fontSize: 14,
    color: "gray",
  },
});

export default SectionComponent;
