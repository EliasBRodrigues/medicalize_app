import { Text, View, ImageBackground } from "react-native";
import { SearchBar } from "@/components/searchBar";
import { SearchBarProps } from "@/types/searchBar.types";
import { s } from "./styles";

// SearchPanel component serves as a styled search interface with a background image
export function SearchPanel({
    value, // The current value of the search input
    onChangeText, // Callback function to handle text changes
    placeholder, // Placeholder text for the search input
  }: SearchBarProps) {

    return (
        // ImageBackground provides a background image for the panel
        <ImageBackground 
            source={require('@/assets/search-panel_bg.png')} 
            resizeMode="cover"
            style={s.container}  
            imageStyle={{borderRadius: 10}}> 

            {/* Overlay display, for a semi-transparent layer over the background */}
            <View style={s.overlay} />

                {/* Container for the text elements */}
                <View style={s.texts}>
                    <Text style={s.title}>Pesquise por medicamentos</Text>
                    <Text  style={s.subtitle}>Pesquise pelo nome do medicamento ou tire uma foto da embalagem.</Text>
                </View>

                {/* SearchBar component for user input */}
                <SearchBar 
                    placeholder={placeholder} // Passes the placeholder prop to SearchBar
                    value={value} // Passes the controlled value to SearchBar
                    onChangeText={onChangeText} // Passes the text change handler to SearchBar
                />
        </ImageBackground>
    );
}