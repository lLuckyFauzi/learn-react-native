import React from "react";
import MealItem from "../MealItem";
import { FlatList, StyleSheet, View } from "react-native";

const MealsList = (props) => {
  const { items } = props;

  const renderMealItem = (itemData) => {
    const { id, title, imageUrl, affordability, complexity, duration } =
      itemData.item;

    const mealItemProps = {
      id,
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
