import React, { useLayoutEffect } from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen(props) {
  const { route, navigation } = props;

  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((d) => {
    return d.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    // only for animation delay
    const categoryTitle = CATEGORIES.find((d) => d.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
