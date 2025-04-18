import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { IconProps as TablerIconProps } from '@tabler/icons-react-native';

function CameraButton({ style, children, ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={[style]} {...rest} activeOpacity={0.8}>
      {children}
    </TouchableOpacity>
  );
}

// IconProps defines the type for the Icon component, which takes a React component as a prop
type IconProps = {
  icon: React.ComponentType<TablerIconProps>; // The icon component should accept TablerIconProps
  size?: number; // Optional size prop for the icon
  color?: string; // Optional color prop for the icon
};

// Icon component that renders the provided icon
function Icon({ icon: Icon, size, color }: IconProps) {
  return <Icon size={size} color={color} />;
}

CameraButton.Icon = Icon;

export { CameraButton };
