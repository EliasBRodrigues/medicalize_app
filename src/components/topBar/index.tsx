import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  Text,
} from 'react-native';
import { s } from './styles';
import { IconSettings, IconArrowNarrowLeft } from '@tabler/icons-react-native';
import { colors, fontFamily } from '@/styles/theme';

// Defining the TopBarProps type as an alias for TouchableOpacityProps
type TopBarProps = TouchableOpacityProps;

function TopBar({ children, style }: TopBarProps) {
  return (
    <View style={[s.container, style]}>
      {/* Renders any child components passed to TopBar */}
      {children}

      {/* TouchableOpacity for a settings button */}
      <TouchableOpacity>
        <IconSettings size={24} color={colors.gray[600]} />
      </TouchableOpacity>
    </View>
  );
}

// Logo component displays a small logo image
function LogoName() {
  return (
    // Text component with custom styles for the logo name
    <Text style={s.logoname}>Medicalize</Text>
  );
}

// ChevronIcon component displays a left arrow icon
function ChevronIcon() {
  return <IconArrowNarrowLeft size={28} color={colors.gray[500]} />;
}

// Attaching Logo and ChevronIcon as static properties to TopBar
// Allows usage like TopBar.Logo and TopBar.ChevronIcon
TopBar.LogoName = LogoName;
TopBar.ChevronIcon = ChevronIcon;

export { TopBar };
