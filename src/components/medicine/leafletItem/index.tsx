import { Text, View } from 'react-native';
import { s } from './styles';
import { BulaItemProps } from '@/types/medicine.types';

export function LeafletItem({ item }: BulaItemProps) {
  return (
    <View style={s.itemContainer}>
      <Text style={s.itemTitle}>{item.title}</Text>
      <Text style={s.itemDescription}>{item.description}</Text>
    </View>
  );
}
