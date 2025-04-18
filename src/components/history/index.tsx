import {
  FlatList,
  Text,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
} from 'react-native';
import { s } from './styles';
import { HistoryItem } from '@/components/historyItem';

// Defining the Props type for individual items in the list
type ItemProps = {
  id: string;
  title: string;
};

// Defining the dataProps type for the History component's input
type DataProps = {
  data: ItemProps[];
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  scrollEventThrottle?: number;
};

export function History({ data, onScroll, scrollEventThrottle }: DataProps) {
  return (
    <View style={s.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        onScroll={onScroll}
        scrollEventThrottle={scrollEventThrottle}
        renderItem={({ item, index }) => (
          <View
            style={
              index < data.length - 1
                ? s.itemContainer
                : s.itemContainerNoBorder
            }
          >
            <HistoryItem text={item.title} />
          </View>
        )}
        contentContainerStyle={s.list}
        scrollEnabled={true}
        ListEmptyComponent={() => (
          <View style={s.emptyHistory}>
            <Image
              source={require('@/assets/empty-history-icon.png')}
              style={{ width: 64, height: 64 }}
            />
            <Text style={s.emptyText}>Nenhuma pesquisa recente encontrada</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
