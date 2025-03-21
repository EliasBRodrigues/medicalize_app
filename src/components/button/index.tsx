import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
  ActivityIndicator,
} from 'react-native';
import { IconProps as TablerIconProps } from '@tabler/icons-react-native';

import { s } from './styles';
import { colors } from '@/styles/colors';

// Defining types for ButtonProps, extending TouchableOpacityProps and adding isLoading property
type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean; // Optional property to indicate if loading state is active
};

// Button component which shows a loading indicator or children based on isLoading state
function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[s.container, style]}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {/* If isLoading is true, show a loading spinner, else show the children */}
      {isLoading ? (
        <ActivityIndicator size={'small'} color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={s.title}>{children}</Text>;
}

// IconProps defines the type for the Icon component, which takes a React component as a prop
type IconProps = {
  icon: React.ComponentType<TablerIconProps>; // The icon component should accept TablerIconProps
};

// Icon component that renders the provided icon with a fixed size and color
function Icon({ icon: Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />;
}

// Assigning Title and Icon as properties to the Button component
Button.Title = Title;
Button.Icon = Icon;

// Exporting the Button component for use in other parts of the application
export { Button };
