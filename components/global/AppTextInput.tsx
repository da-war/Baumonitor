import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "@/constants/theme";

interface AppTextInputProps extends TextInputProps {
  label: string;
  error?: string;
  style?: object;
  mainStyle?: ViewStyle;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  style,
  label,
  mainStyle,
  ...props
}) => {
  return (
    <View style={[styles.mainContainer, mainStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    color: COLORS.primary,
  },
  label: {
    marginBottom: 5,
    fontSize: 12,
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
  mainContainer: {
    marginVertical: 10,
  },
});
