import React, { useState } from "react";
import { StyleSheet, Text, View, TextStyle, ViewStyle } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS, FONTS } from "@/constants/theme"; // Adjust path as needed

interface AppDropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  data: { label: string; value: string }[];
  error?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  mainStyle?: ViewStyle;
}

const AppDropdown: React.FC<AppDropdownProps> = ({
  label,
  value,
  onChange,
  data,
  error,
  style,
  inputStyle,
  mainStyle,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          {label}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={[styles.mainContainer, mainStyle]}>
      {renderLabel()}

      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }, style]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          onChange(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name="Safety"
            size={20}
          />
        )}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default AppDropdown;

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontSize: 12,
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
  mainContainer: {
    marginVertical: 10,
  },
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: COLORS.white,
  },
  placeholderStyle: {
    fontSize: 14,
    color: COLORS.primary,
    fontFamily: FONTS.regular,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: COLORS.primary,
    fontFamily: FONTS.regular,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
    color: COLORS.primary,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  icon: {
    marginRight: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
