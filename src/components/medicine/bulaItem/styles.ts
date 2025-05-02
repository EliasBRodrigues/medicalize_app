import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    itemContainer: {
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.gray[200],
      gap: 6,
    },
    itemTitle: {
      fontSize: 18,
      fontFamily: fontFamily.bold,
      color: colors.gray[600],
    },
    itemDescription: {
      fontSize: 14,
      fontFamily: fontFamily.regular,
      color: colors.gray[500],
      lineHeight: 20,
    },
  });