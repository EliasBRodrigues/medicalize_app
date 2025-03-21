import { s } from './styles';
import { colors } from '@/styles/theme';

import { Text, View } from 'react-native';
import { IconProps } from '@tabler/icons-react-native';

// Defining the type for the component's props, including title, description, and an icon component
type Props = {
  title: string; // Title text to be displayed in the component
  description: string; // Description text to be displayed under the title
  icon: React.ComponentType<IconProps>; // Icon component to be rendered
};

// Functional component that renders a step with an icon, title, and description
export function Step({ title, description, icon: Icon }: Props) {
  return (
    // Container for the whole step
    <View style={s.container}>
      {/* Render the icon if it's provided */}
      {Icon && <Icon size={28} color={colors.red.base} />}

      <View style={s.details}>
        {/* Title text with applied styling */}
        <Text style={s.title}>{title}</Text>

        {/* Description text with applied styling */}
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
}
