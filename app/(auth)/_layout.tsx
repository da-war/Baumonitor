import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AuthLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" />
      </Stack>
    </SafeAreaProvider>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
