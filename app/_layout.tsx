import { Slot } from "expo-router";
import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import NavBar from "../src/components/NavBar/NavBar";

const Layout = ({ children }) => {
  return (
	<View
	className="flex-1  items-center bg-slate-50"
  >
	<Slot />
	<NavBar />
  </View>
    // <ImageBackground
    //   source={require("../assets/bg.jpg")}
    //   style={styles.backgroundImage}
	//   className="flex-1  items-center"
    // >
    //   <Slot />
	//   <NavBar />
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    zIndex: -1,
    flex: 1,
    resizeMode: "cover", // Adjust the resizeMode as per your requirement
  },
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Layout;
