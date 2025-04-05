import { FlatList, Text, View, FlatListProps, NativeSyntheticEvent, NativeScrollEvent, Image } from "react-native";
import { ActionLink } from "@/components/actionLink";
import { s } from "./styles";
import { HistoryItem } from "@/components/historyItem";

// Defining the Props type for individual items in the list
type Props = {
    id: string,
    title: string 
}

// Defining the dataProps type for the History component's input
type dataProps = {
    data: Props[]
}

export function History({data} : dataProps) {
    return(
            <FlatList
                data={data.slice(0, 10)} // Takes only first 10 items from the data array (note: splice modifies original array)
                keyExtractor={item => item.id}
                // Renders each item using HistoryItem component
                renderItem={({item}) => 
                    <HistoryItem text={item.title} />}
                contentContainerStyle={s.list}
                scrollEnabled={false} // Disables scrolling for the FlatList
                ListHeaderComponent={() => (
                    // Header component that appears above the list items
                    <View style={s.header} >
                        <Text style={s.title}>Últimas pesquisas</Text>
                        {/* Action link to view all items */}
                        <ActionLink onPress={() => console.log("Ver tudo")} >
                            <ActionLink.LinkText>Ver tudo</ActionLink.LinkText>
                        </ActionLink>
                    </View>
                )}
                ListEmptyComponent={() => (
                    // Component displayed when the list is empty
                    <View style={s.emptyHistory}>
                        <Image source={require("@/assets/empty-history-icon.png")} style={{width: 64, height: 64}} />
                        <Text style={s.emptyText}>Nenhuma pesquisa recente encontrada</Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false} 
            />
    );
}