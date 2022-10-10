import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import IconButon from "../components/IconButon";

const MealDetail = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonHadnler() {
    console.log("Header button pressed");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButon onPress={headerButtonHadnler} />;
      },
    });
  }, [navigation, headerButtonHadnler]);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Image source={{ uri: selectMeal.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{selectMeal.title}</Text>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{selectMeal.duration}m</Text>
            <Text style={styles.detailItem}>{selectMeal.complexity}</Text>
            <Text style={styles.detailItem}>{selectMeal.affordability}</Text>
          </View>

          <View style={styles.subOuterContainer}>
            <View style={styles.subContainer}>
              <View style={styles.subTitleContainer}>
                <Text style={styles.title}>Ingredients</Text>
              </View>
              <View style={styles.data}>
                {selectMeal.ingredients.map((ingredient) => (
                  <Text key={ingredient}>{ingredient}</Text>
                ))}
              </View>

              <View style={styles.subTitleContainer}>
                <Text style={styles.title}>Steps</Text>
              </View>
              {selectMeal.steps.map((step) => (
                <Text key={step} style={styles.data}>
                  {step}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 16,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    // marginHorizontal: 20,
    marginVertical: 4,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
  },
  data: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#ccc",
    textAlign: "center",
  },

  subOuterContainer: {
    alignItems: "center",
  },
  subContainer: {
    width: "80%",
    marginBottom: 20,
  },
});
