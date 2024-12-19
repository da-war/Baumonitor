import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getProjectBuildings, projects } from "@/data/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "@/constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const building = () => {
  const { id } = useLocalSearchParams();
  console.log(id);
  console.log("typess", typeof id);
  const datas = id.toString();
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      console.log("Loaded");
      const project = projects.find(
        (project) => project.id.toString() === datas.toString()
      );
      setBuildings(project?.buildings);
      console.log("buildings", buildings);
      return project?.buildings;
    }, 500);
  }, []);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.horizontal}>
        <Pressable onPress={() => router.back()}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color={COLORS.primary}
          />
        </Pressable>

        <Text style={styles.buildingsTitle}>Buildings</Text>
      </View>
      <View style={styles.bottomContainer}>
        {buildings.map((building) => (
          <Pressable
            key={building.id}
            style={styles.buildingCard}
            onPress={() =>
              router.push({
                pathname: "/(app)/inspection",
                params: { buildingId: building?.id, projectId: datas },
              })
            }
          >
            <Text style={styles.buildingName}>{building?.name}</Text>
            <View style={styles.horizontal}>
              <View style={styles.item}>
                <Text style={styles.text}>Number of Inspections</Text>
                <Text style={styles.textBold}>
                  {building?.inspections.length}
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.text}>Number of Damages</Text>
                <Text style={styles.textBold}>
                  {building?.inspections?.reduce(
                    (acc, inspection) => acc + inspection?.damages.length,
                    0
                  )}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default building;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  buildingsTitle: {
    fontSize: 24,
    fontFamily: FONTS.regular,
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 20,
  },
  bottomContainer: {
    marginTop: 20,
  },
  buildingCard: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  buildingName: {
    fontSize: 18,
    fontFamily: FONTS.bold,
  },
  buildingAddress: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
  },
  item: {
    marginVertical: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: COLORS.lightGray,
    padding: 5,
  },
  text: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: COLORS.secondary,
  },
  textBold: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
  },
});
