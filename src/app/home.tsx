import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button } from "@/components/button";
import { TopBar } from "@/components/topBar";
import { IconLineScan } from "@tabler/icons-react-native";
import { History } from "@/components/history";
import { SearchPanel } from "@/components/searchPanel";
import { colors } from "@/styles/colors";

export default function Home() {
  // State to manage the search input text
  const [searchText, setSearchText] = useState("");

  // Sample data for the History component (list of medications)
  const DATA = [
    { id: "1", title: "Dipirona" },
    { id: "2", title: "Dicloridrato de Metadona" },
    { id: "3", title: "Paracetamol" },
    { id: "4", title: "Ibuprofeno" },
    { id: "5", title: "Losartana" },
    { id: "6", title: "Mylantra Plus" },
    { id: "7", title: "Losartana" }
  ];

  return (
    <View style={s.container}>
      {/* TopBar component with logo name and gear icon */}
      <TopBar>
        <TopBar.LogoName />
      </TopBar>

      {/* Scrollable content area */}
      <ScrollView 
        style={s.scrollView} 
        showsVerticalScrollIndicator={false} // Hides the vertical scroll indicator
      >
        {/* Search panel for medication lookup */}
        <SearchPanel
          placeholder="Pesquisar medicamento" 
          value={searchText} 
          onChangeText={(searchText) => setSearchText(searchText)} 
        />

        
        {/* History component displaying the list of drugs that have already been searched */}
        <History data={DATA} />
      </ScrollView>

      {/* Container for the fixed button at the bottom */}
      <View style={s.btnContainer}>    
        {/* Button to identify a medicine, through scanning */}
        <Button>
          <Button.Icon icon={IconLineScan} />
          <Button.Title>Identificar Medicamento</Button.Title>
        </Button>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1, 
    position: "absolute", 
    bottom: 80, 
    top: 64, 
    overflow: "hidden", 
    paddingHorizontal: 16
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: colors.gray[100],
  }
})