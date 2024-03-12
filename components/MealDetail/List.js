import React from "react";
import { StyleSheet, Text, View } from "react-native";

function List(props) {
  const { data } = props;

  return data.map((d) => (
    <View style={styles.listItem} key={d}>
      <Text style={styles.itemText}>{d}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "white",
  },
  itemText: {
    color: "black",
    textAlign: "center",
  },
});
