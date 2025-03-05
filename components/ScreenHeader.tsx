import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";
import ChevronLeft from "./ChevronLeft";

interface ScreenHeaderProps {
  title?: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  onBackPress,
  showBackButton = false,
  leftComponent,
  rightComponent,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  const renderLeft = () => {
    if (leftComponent) return leftComponent;
    if (showBackButton) {
      return (
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <ChevronLeft width={27} height={27} />
        </TouchableOpacity>
      );
    }
    return <View style={styles.placeholder} />;
  };

  const renderRight = () => {
    if (rightComponent) return rightComponent;
    return <View style={styles.placeholder} />;
  };

  return (
    <View style={styles.container}>
      {renderLeft()}
      {title && <Text style={styles.title}>{title}</Text>}
      {renderRight()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 56,
    paddingHorizontal: 16,
  },
  backButton: {
    marginTop: 15,
    justifyContent: "center",
  },
  title: {
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.xl,
    color: colors.deepBlue,
    flex: 1,
    textAlign: "center",
  },
  placeholder: {
    width: 40,
  },
});

export default ScreenHeader;
