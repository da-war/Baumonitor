import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "@/constants/theme";

interface CustomButtonProps {
  title: string;
  style: ViewStyle;
  titleStyle: TextStyle;
  onPress: () => void;
  bgColor: string;
  image?: ImageSourcePropType;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  style,
  titleStyle,
  onPress,
  bgColor,
  image,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.btnContainer, style]}>
      {image && (
        <Image source={image} resizeMode="contain" style={styles.image} />
      )}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    padding: 10,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 18,
    height: 18,
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
});
