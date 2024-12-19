import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const index = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log("Loaded");
      router.replace("/(auth)/welcome");
    }, 2500);
  }, []);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Loading...</Text>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
