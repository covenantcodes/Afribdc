import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import type { MaterialIcons as MaterialIconsType } from "@expo/vector-icons";
import colors from "../utils/colors";
import { FONTFAMILY, FONTSIZE } from "../utils/fonts";

interface SelectItem {
  label: string;
  value: string;
}

interface CustomSelectProps {
  label?: string;
  items: SelectItem[];
  value: string;
  onValueChange: (value: string) => void;
  width?: number | string;
  height?: number;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  showShadow?: boolean;
  required?: boolean;
  placeholder?: string;
  errorMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
  selectStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  iconComponent?: React.ReactNode;
  iconName?: keyof typeof MaterialIconsType.glyphMap;
  iconSize?: number;
  iconColor?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  items,
  value,
  onValueChange,
  width = "100%",
  height = 48,
  borderRadius = 8,
  borderColor = colors.gray,
  borderWidth = 0,
  showShadow = false,
  required = false,
  placeholder = "Select an option",
  errorMessage,
  containerStyle,
  selectStyle,
  labelStyle,
  errorStyle,
  iconComponent,
  iconName = "arrow-drop-down",
  iconSize = 24,
  iconColor = colors.gray,
  showSearch = false,
  searchPlaceholder = "Search...",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const selectedItem = items.find((item) => item.value === value);
  const widthStyle =
    typeof width === "number" ? width : width === "100%" ? "100%" : "auto";

  const filteredItems = useCallback(() => {
    if (!searchQuery.trim()) return items;
    return items.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [items, searchQuery]);

  return (
    <View style={[styles.container, { width: widthStyle }, containerStyle]}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, labelStyle]}>
            {label}
            {required && <Text style={styles.required}> *</Text>}
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={[
          styles.select,
          {
            height,
            borderRadius,
            borderColor,
            borderWidth,
          },
          showShadow && styles.shadow,
          errorMessage && styles.selectError,
          selectStyle,
        ]}
        onPress={() => setIsOpen(true)}
        activeOpacity={0.7}
      >
        <Text style={[styles.selectText, !selectedItem && styles.placeholder]}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        {iconComponent || (
          <MaterialIcons
            name={isOpen ? "arrow-drop-up" : iconName}
            size={iconSize}
            color={iconColor}
          />
        )}
      </TouchableOpacity>

      {errorMessage && (
        <Text style={[styles.errorText, errorStyle]}>{errorMessage}</Text>
      )}

      <Modal visible={isOpen} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => {
            setIsOpen(false);
            setSearchQuery("");
          }}
        >
          <View style={[styles.modalContent, { width: widthStyle }]}>
            {showSearch && (
              <View style={styles.searchContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <MaterialIcons name="search" size={20} color={colors.gray2} />
              </View>
            )}
            <FlatList
              data={filteredItems()}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    item.value === value && styles.selectedOption,
                  ]}
                  onPress={() => {
                    onValueChange(item.value);
                    setIsOpen(false);
                    setSearchQuery("");
                  }}
                >
                  <Text
                    style={[
                      styles.optionText,
                      item.value === value && styles.selectedOptionText,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  labelContainer: {
    marginBottom: 8,
  },
  label: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.sm,
    color: colors.black,
  },
  required: {
    color: colors.black,
    fontFamily: FONTFAMILY.bold,
  },
  select: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectText: {
    flex: 1,
    fontFamily: FONTFAMILY.regular,
    fontSize: 16,
    color: colors.black,
  },
  placeholder: {
    color: colors.gray,
  },
  shadow: {
    shadowColor: "#b3b3b3",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 5,
  },
  selectError: {
    borderColor: colors.red,
  },
  errorText: {
    color: colors.red,
    fontSize: FONTSIZE.xs,
    fontFamily: FONTFAMILY.regular,
    marginTop: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 8,
    maxHeight: 300,
  },
  option: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray + "20",
  },
  selectedOption: {
    backgroundColor: colors.primaryColor + "10",
  },
  optionText: {
    fontFamily: FONTFAMILY.regular,
    fontSize: 16,
    color: colors.black,
  },
  selectedOptionText: {
    color: colors.primaryColor,
    fontFamily: FONTFAMILY.medium,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray + "20",
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.sm,
    color: colors.black,
    marginRight: 8,
  },
});

export default CustomSelect;
