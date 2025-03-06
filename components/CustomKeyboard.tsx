import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";

interface CustomKeyboardProps {
  onKeyPress: (key: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const CustomKeyboard: React.FC<CustomKeyboardProps> = ({
  onKeyPress,
  containerStyle,
}) => {
  const renderKey = (value: string) => (
    <TouchableOpacity
      style={styles.key}
      onPress={() => onKeyPress(value)}
      activeOpacity={0.7}
    >
      {value === "delete" ? (
        <Ionicons name="backspace-outline" size={26} color={colors.black} />
      ) : (
        <Text style={styles.keyText}>{value}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.row}>
        {renderKey("1")}
        {renderKey("2")}
        {renderKey("3")}
      </View>
      <View style={styles.row}>
        {renderKey("4")}
        {renderKey("5")}
        {renderKey("6")}
      </View>
      <View style={styles.row}>
        {renderKey("7")}
        {renderKey("8")}
        {renderKey("9")}
      </View>
      <View style={styles.row}>
        {renderKey("*")}
        {renderKey("0")}
        {renderKey("delete")}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.background,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  key: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  keyText: {
    fontSize: FONTSIZE.xl,
    fontFamily: FONTFAMILY.medium,
    color: colors.gray3,
  },
});

export default CustomKeyboard;
