import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { s } from "./styles";
import { IconHistory, IconArrowUpLeft } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

// Defining the Props type, extending TouchableOpacityProps with a custom text property
type Props = TouchableOpacityProps &{
    text: String
}

// HistoryItem component represents a single clickable item in a history list
export function HistoryItem({text, ...rest}: Props) {
    return (
        // TouchableOpacity serves as the clickable container
        <TouchableOpacity style={s.container} {...rest}>
            <IconHistory size={20} color={colors.gray[600]} style={{transform: [{rotateX: '180deg'}]}} />
            <Text style={s.text}>{text}</Text>
            <IconArrowUpLeft size={20} color={colors.gray[600]} />
        </TouchableOpacity>
    );
}