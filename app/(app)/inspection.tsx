import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "@/constants/theme";
import AppDropdown from "@/components/global/AppDropDown";
import AppTextInput from "@/components/global/AppTextInput";
import CustomButton from "@/components/global/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";

const inspection = () => {
  const data = useLocalSearchParams();
  const updated = JSON.stringify(data);
  const parsed = JSON.parse(updated);

  console.log("parsed", parsed);

  const [components, setComponents] = useState<any[]>([]);

  const componentTypes = [
    { label: "Concrete", value: "concrete" },
    { label: "Wood", value: "wood" },
    { label: "Metal", value: "metal" },
  ];

  // Function to add a new component
  const addComponent = () => {
    setComponents([
      ...components,
      {
        id: Date.now(),
        name: "",
        material: "",
        notes: "",
        type: "",
        damages: [],
      },
    ]);
  };

  // Function to add damage to a specific component
  const addDamage = (componentId: number) => {
    const updatedComponents = components.map((component) =>
      component.id === componentId
        ? {
            ...component,
            damages: [
              ...component.damages,
              {
                damageType: "",
                description: "",
                width: "",
                height: "",
                depth: "",
                stabilityRate: "",
                trafficSafetyRate: "",
                durabilityRate: "",
              },
            ],
          }
        : component
    );
    setComponents(updatedComponents);
  };

  // Function to delete a component
  const deleteComponent = (componentId: number) => {
    const updatedComponents = components.filter(
      (component) => component.id !== componentId
    );
    setComponents(updatedComponents);
  };

  // Function to delete a damage
  const deleteDamage = (componentId: number, damageIndex: number) => {
    const updatedComponents = components.map((component) =>
      component.id === componentId
        ? {
            ...component,
            damages: component.damages.filter(
              (_, index) => index !== damageIndex
            ),
          }
        : component
    );
    setComponents(updatedComponents);
  };

  // Handle changes in the component details
  const handleComponentChange = (
    componentId: number,
    field: string,
    value: string
  ) => {
    const updatedComponents = components.map((component) =>
      component.id === componentId
        ? { ...component, [field]: value }
        : component
    );
    setComponents(updatedComponents);
  };

  // Handle changes in the damage details
  const handleDamageChange = (
    componentId: number,
    damageIndex: number,
    field: string,
    value: string
  ) => {
    const updatedComponents = components.map((component) =>
      component.id === componentId
        ? {
            ...component,
            damages: component.damages.map((damage, index) =>
              index === damageIndex ? { ...damage, [field]: value } : damage
            ),
          }
        : component
    );
    setComponents(updatedComponents);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.horizontal}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={24}
          color={COLORS.primary}
          onPress={() => router.back()}
        />
        <Text style={styles.buildingTitle}>Inspection</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {/* Add components dynamically */}
        {components.map((component) => (
          <View key={component.id} style={styles.componentCard}>
            <Text style={styles.componentTitle}>Component {component.id}</Text>

            {/* Component Name */}
            <AppTextInput
              label="Component Name"
              value={component.name}
              onChangeText={(text) =>
                handleComponentChange(component.id, "name", text)
              }
            />

            {/* Material Type */}
            <AppTextInput
              label="Material Type"
              value={component.material}
              onChangeText={(text) =>
                handleComponentChange(component.id, "material", text)
              }
            />

            {/* Component Notes */}
            <AppTextInput
              label="Component Notes"
              value={component.notes}
              onChangeText={(text) =>
                handleComponentChange(component.id, "notes", text)
              }
            />

            {/* Component Type (Dropdown) */}
            <AppDropdown
              label="Component Type"
              value={component.type}
              onChange={(value) =>
                handleComponentChange(component.id, "type", value)
              }
              data={componentTypes}
            />

            {/* Button to delete component */}
            <CustomButton
              title="Delete Component"
              style={styles.deleteButton}
              titleStyle={styles.buttonTitle}
              onPress={() => deleteComponent(component.id)}
              bgColor={COLORS.danger}
            />

            {/* Damage Form */}
            {component.damages.map((damage, damageIndex) => (
              <View key={damageIndex} style={styles.damageCard}>
                <Text style={styles.damageTitle}>Damage {damageIndex + 1}</Text>

                {/* Damage Type */}
                <AppTextInput
                  label="Damage Type"
                  value={damage.damageType}
                  onChangeText={(text) =>
                    handleDamageChange(
                      component.id,
                      damageIndex,
                      "damageType",
                      text
                    )
                  }
                />

                {/* Damage Description */}
                <AppTextInput
                  label="Damage Description"
                  value={damage.description}
                  onChangeText={(text) =>
                    handleDamageChange(
                      component.id,
                      damageIndex,
                      "description",
                      text
                    )
                  }
                />

                {/* Dimensions */}
                <View style={styles.dimensionFields}>
                  <AppTextInput
                    label="Width"
                    value={damage.width}
                    onChangeText={(text) =>
                      handleDamageChange(
                        component.id,
                        damageIndex,
                        "width",
                        text
                      )
                    }
                  />
                  <AppTextInput
                    label="Height"
                    value={damage.height}
                    onChangeText={(text) =>
                      handleDamageChange(
                        component.id,
                        damageIndex,
                        "height",
                        text
                      )
                    }
                  />
                  <AppTextInput
                    label="Depth"
                    value={damage.depth}
                    onChangeText={(text) =>
                      handleDamageChange(
                        component.id,
                        damageIndex,
                        "depth",
                        text
                      )
                    }
                  />
                </View>

                {/* Stability, Safety, Durability */}
                <View style={styles.dimensionFields}>
                  <AppTextInput
                    label="Stability Rate"
                    value={damage.stabilityRate}
                    onChangeText={(text) =>
                      handleDamageChange(
                        component.id,
                        damageIndex,
                        "stabilityRate",
                        text
                      )
                    }
                  />
                  <AppTextInput
                    label="Traffic Safety Rate"
                    value={damage.trafficSafetyRate}
                    onChangeText={(text) =>
                      handleDamageChange(
                        component.id,
                        damageIndex,
                        "trafficSafetyRate",
                        text
                      )
                    }
                  />
                  <AppTextInput
                    label="Durability Rate"
                    value={damage.durabilityRate}
                    onChangeText={(text) =>
                      handleDamageChange(
                        component.id,
                        damageIndex,
                        "durabilityRate",
                        text
                      )
                    }
                  />
                </View>

                {/* Button to delete damage */}
                <CustomButton
                  title="Delete Damage"
                  style={styles.deleteButton}
                  titleStyle={styles.buttonTitle}
                  onPress={() => deleteDamage(component.id, damageIndex)}
                  bgColor={COLORS.danger}
                />
              </View>
            ))}

            {/* Button to add damage */}
            <CustomButton
              title="Add Damage"
              style={styles.addDamageButton}
              titleStyle={styles.buttonTitle}
              onPress={() => addDamage(component.id)}
              bgColor={COLORS.primary}
            />
          </View>
        ))}

        {/* Button to add a new component */}
        <CustomButton
          title="Add Component"
          style={styles.addComponentButton}
          titleStyle={styles.buttonTitle}
          onPress={addComponent}
          bgColor={COLORS.primary}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default inspection;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  buildingTitle: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    marginLeft: 10,
  },
  scrollView: {
    paddingBottom: 100, // Padding to make sure buttons are visible
  },
  componentCard: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
  },
  componentTitle: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    marginBottom: 10,
  },
  damageCard: {
    marginTop: 10,
    marginBottom: 20,
  },
  damageTitle: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    marginBottom: 10,
  },
  dimensionFields: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  addDamageButton: {
    marginTop: 10,
  },
  addComponentButton: {
    marginTop: 30,
  },
  deleteButton: {
    marginTop: 15,
    backgroundColor: "red",
  },
  buttonTitle: {
    fontSize: 16,
    color: COLORS.white,
  },
});
