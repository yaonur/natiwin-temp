import { View, Text, Pressable } from "react-native";
import Layout from "./_layout";
import { Link, useRouter } from "expo-router";
import React from "react";

const LoginPage = () => {
  const router = useRouter();
  const handlePress = () => {
    router.replace("app");
  };
  return (
      <View className="flex-1 justify-center items-center ">
        <Text>Some fancy logo</Text>
        <Text>FAncy slide bar to go register</Text>
        <Link href={"/register"}>Create Account</Link>
      </View>
  );
};

export default LoginPage;
