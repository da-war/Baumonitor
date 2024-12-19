import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "@/constants/theme";
import AppTextInput from "@/components/global/AppTextInput";
import CustomButton from "@/components/global/CustomButton";

import Checkbox from "expo-checkbox";
import { router } from "expo-router";

const welcome = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login");
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    const data = {
      email,
      password,
    };

    console.log(data);
    router.replace("/(app)/home");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image
        resizeMode="contain"
        source={require("@/assets/images/logo.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to the app.</Text>
      <View style={styles.middleContainer}>
        <AppTextInput
          placeholder="enter your email"
          keyboardType="email-address"
          style={{ marginBottom: 5 }}
          placeholderTextColor={COLORS.gray}
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
        <AppTextInput
          placeholder="enter your password"
          keyboardType="email-address"
          style={{ marginVertical: 0 }}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={COLORS.gray}
          label="Password"
        />
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>Remember Me</Text>
          <View style={styles.checkboxWrapper}>
            <Checkbox
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.primary : undefined}
            />
          </View>
        </View>
        <CustomButton
          title="Login"
          bgColor={COLORS.primary}
          onPress={() => handleLogin()}
          style={{ marginTop: 20 }}
          titleStyle={{ color: COLORS.white }}
        />
      </View>
    </SafeAreaView>
  );
};

export default welcome;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 15,
  },
  title: {
    fontSize: 22,
    color: COLORS.primary,
    fontFamily: FONTS.regular,
    marginLeft: 23,
    marginTop: -75,
  },
  middleContainer: {
    marginHorizontal: 23,
    marginTop: 50,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
  checkboxWrapper: {
    transform: [{ scale: 0.8 }], // Scale to make the checkbox larger
  },
});
