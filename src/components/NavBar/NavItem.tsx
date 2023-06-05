import { Text, View, Image } from "react-native";
import React, { Component } from "react";

interface NavItemProps {
  filename: string;
}

const images = {
  navImage: require("../../../assets/bg.jpg"), // Replace with your default image path
};

export class NavItem extends Component<NavItemProps> {
  render() {
    const { filename } = this.props;
    const imageSource =
      filename !== ""
        ? require('../../../assets/icons/nav/'+filename+'.png')
        : images.navImage;

    return (
      <View>
        <Image source={imageSource} />
      </View>
    );
  }
}

export default NavItem;
