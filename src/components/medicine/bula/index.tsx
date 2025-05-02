import { colors, fontFamily } from "@/styles/theme";
import { FlatList, Text, View, StyleSheet } from "react-native";
import BulaItem from "../bulaItem";
import { BulaProps } from "@/types/medicine.types";
import { s } from "./styles";

export default function Bula({ bula }: BulaProps) {
  const bulaItems = Object.entries(bula).map(([title, { Descrição }]) => ({
    title,
    description: Descrição,
  }));

  return (
    <FlatList
      data={bulaItems}
      renderItem={({ item }) => <BulaItem item={item} />}
      keyExtractor={(item) => item.title}
      contentContainerStyle={s.list}
      showsVerticalScrollIndicator={false}
    />
  );
}