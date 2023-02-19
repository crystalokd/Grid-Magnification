import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RoundedRect } from "@shopify/react-native-skia";

const RoundedItem = React.memo(({ point, ...squareProps }) => {
  return <RoundedRect {...squareProps} r={4} />;
});

export default RoundedItem;

const styles = StyleSheet.create({});
