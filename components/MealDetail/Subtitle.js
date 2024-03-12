import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Subtitle(props) {
  const { children } = props;
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
