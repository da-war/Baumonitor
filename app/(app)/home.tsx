import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "@/constants/theme";
import { projects } from "@/data/data";
import { router } from "expo-router";

const home = () => {
  const onPressCard = (item: number) => {
    router.push({
      params: { id: item },
      pathname: "/(app)/building",
    });
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>Welcome</Text>
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.projectTitle}>
        Projects In-Progress {"( "}
        <Text style={{ fontSize: 22 }}>{projects.length}</Text>
        {" )"}
      </Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => onPressCard(item.id)}
            style={styles.projectCard}
          >
            <Text style={styles.projectName}>{item.name}</Text>
            <View style={styles.horizontal}>
              <View style={styles.item}>
                <Text style={styles.text}>Number of Buildings</Text>
                <Text style={styles.textBold}>{item.buildings.length}</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.text}>Number of Inspections</Text>
                <Text style={styles.textBold}>
                  {item.buildings.reduce(
                    (acc, building) => acc + building.inspections.length,
                    0
                  )}
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.text}>Number of Damages</Text>
                <Text style={styles.textBold}>
                  {item.buildings.reduce(
                    (acc, building) =>
                      acc +
                      building.inspections.reduce(
                        (acc, inspection) => acc + inspection.damages.length,
                        0
                      ),
                    0
                  )}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.regular,
    marginTop: 20,
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    marginBottom: 30,
  },
  projectName: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
  },
  projectCard: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: COLORS.secondary,
    marginBottom: 5,
    textAlign: "center",
  },
  textBold: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 10,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    borderRadius: 5,
    backgroundColor: COLORS.lightGray,
    paddingVertical: 10,
  },
});
