import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import NavItem from "./NavItem";

export class NavBar extends Component {
  render() {
    return (
      <View className="flex-row justify-around items-center h-14 w-3/4 mb-2  p-4 bg-slate-100 rounded-lg ">
        <NavItem filename={"home"}  />
      </View>
    );
  }
}

export default NavBar;
