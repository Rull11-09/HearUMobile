// FooterComponent.js
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FooterComponent = () => {
  const [selectedIcon, setSelectedIcon] = useState("home");
  const navigation = useNavigation();

  const handleIconPress = (iconName) => {
    setSelectedIcon(iconName);

    // Navegamos a la pantalla correspondiente
    switch (iconName) {
      case "home":
        navigation.navigate("Home");
        break;
      case "search":
        navigation.navigate("Search");
        break;
      case "heart":
        navigation.navigate("Feed"); // Cambiado de "Likes" a "Feed"
        break;
      case "user":
        navigation.navigate("Profile");
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Icono de Home */}
      <TouchableOpacity
        style={[
          styles.iconContainer,
          selectedIcon === "home" && styles.selectedIcon,
        ]}
        onPress={() => handleIconPress("home")}
      >
        <FontAwesome name="home" size={24} color="black" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      {/* Icono de Buscar */}
      <TouchableOpacity
        style={[
          styles.iconContainer,
          selectedIcon === "search" && styles.selectedIcon,
        ]}
        onPress={() => handleIconPress("search")}
      >
        <FontAwesome name="search" size={24} color="black" />
        <Text style={styles.iconText}>Buscar</Text>
      </TouchableOpacity>

      {/* Icono de Feed (anteriormente Likes) */}
      <TouchableOpacity
        style={[
          styles.iconContainer,
          selectedIcon === "heart" && styles.selectedIcon,
        ]}
        onPress={() => handleIconPress("heart")}
      >
        <View>
          <FontAwesome name="feed" size={24} color="black" />
          {/* Cambiado el icono a "feed" */}
          <Text style={styles.iconText}>Feed</Text>
          {/* Cambiado el texto a "Feed" */}
        </View>
      </TouchableOpacity>

      {/* Icono de Perfil */}
      <TouchableOpacity
        style={[
          styles.iconContainer,
          selectedIcon === "user" && styles.selectedIcon,
        ]}
        onPress={() => handleIconPress("user")}
      >
        <FontAwesome name="user" size={24} color="black" />
        <Text style={styles.iconText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#525252",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#464646",
    width: "105%",
    position: "absolute",
    bottom: 0,
    borderRadius: 20,
  },
  iconContainer: {
    alignItems: "center",
  },
  iconText: {
    marginTop: 5,
    color: "black",
  },
  selectedIcon: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 5,
  },
});

export default FooterComponent;
