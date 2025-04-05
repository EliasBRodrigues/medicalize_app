import { TouchableOpacity, TouchableOpacityProps, Text, TextProps } from "react-native";
import { IconProps as TablerIconProps } from '@tabler/icons-react-native';
import { s } from "./styles";
import { colors } from "@/styles/theme";

// Defining the ButtonProps type as an alias for TouchableOpacityProps
type ButtonProps = TouchableOpacityProps;

// ActionLink is a reusable button component that wraps TouchableOpacity
function ActionLink({children, ...rest}: ButtonProps) {
    return(
        <TouchableOpacity style={s.container} activeOpacity={0.9} {...rest}>
            {children}
        </TouchableOpacity>
    );
}

// LinkText is a simple text component styled for use within ActionLink
function LinkText({ children }: TextProps) {
  return <Text style={s.text}>{children}</Text>;
}

// Defining props for the LinkIcon component, which expects an icon component
type IconProps = {
    icon: React.ComponentType<TablerIconProps>; // The icon component should accept TablerIconProps
  };
  
  // Icon component that renders the provided icon with a fixed size and color
  function LinkIcon({ icon: Icon }: IconProps) {
    // Icon is the component passed via props, rendered with size 18 and a gray color
    return <Icon size={18} color={colors.gray[600]} />;
  }

// Attaching LinkText and LinkIcon as static properties to ActionLink
// This allows them to be used as ActionLink.LinkText and ActionLink.LinkIcon
ActionLink.LinkText = LinkText;
ActionLink.LinkIcon = LinkIcon;

export {ActionLink}