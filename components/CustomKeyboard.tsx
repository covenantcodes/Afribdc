import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";

interface CustomKeyboardProps {
  onKeyPress: (key: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  onOutsidePress?: () => void;
}

const CustomKeyboard: React.FC<CustomKeyboardProps> = ({
  onKeyPress,
  containerStyle,
  onOutsidePress,
}) => {
  const renderKey = (value: string) => (
    <View style={styles.keyWrapper}>
      <Pressable
        style={({ pressed }) => [styles.key, pressed && styles.keyPressed]}
        onPress={() => onKeyPress(value)}
        android_ripple={{
          color: colors.gray + "20",
          borderless: true,
          radius: 35,
        }}
      >
        {value === "delete" ? (
          <Ionicons name="backspace-outline" size={26} color={colors.black} />
        ) : (
          <Text style={styles.keyText}>{value}</Text>
        )}
      </Pressable>
    </View>
  );

  return (
    <Pressable
      onPress={onOutsidePress}
      style={[styles.container, containerStyle]}
    >
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
    </Pressable>
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
  keyWrapper: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 35,
  },
  key: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  keyPressed: {
    backgroundColor: colors.gray2 + "20",
  },
  keyText: {
    fontSize: FONTSIZE.xl,
    fontFamily: FONTFAMILY.medium,
    color: colors.gray3,
  },
});

export default CustomKeyboard;
