import { useState } from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { RootStackParamList } from "../../navigation/AuthNavigator";
import ScreenHeader from "../../components/ScreenHeader";
import CustomInput from "../../components/CustomInput";
import CustomSelect from "../../components/CustomSelect";
import CustomButton from "../../components/CustomButton";
import colors from "../../utils/colors";
import countryData from "../../data/countries_flags_codes.json";

type PersonalInfoNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PersonalInfo"
>;

interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  country: string;
  state: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postalCode: string;
}

// Add this interface to define the shape of select items
interface SelectItem {
  label: string;
  value: string;
}

const PersonalInfo = () => {
  const navigation = useNavigation<PersonalInfoNavigationProp>();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    country: "",
    state: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
  });

  // Update the countryItems mapping to explicitly return string values
  const countryItems: SelectItem[] = countryData.map((country) => ({
    label: country.name.common,
    value: String(country.name.common), // Ensure value is always a string
  }));

  // Update stateItems to match the SelectItem interface
  const stateItems: SelectItem[] = [
    { label: "State 1", value: "state1" },
    { label: "State 2", value: "state2" },
  ];

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setFormData((prev) => ({ ...prev, dateOfBirth: selectedDate }));
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-GB"); // DD/MM/YYYY format
  };

  // Add validation function
  const isFormValid = () => {
    return formData.firstName.trim() !== "" && formData.lastName.trim() !== "";
  };

  // Update error states
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
  });

  // Add validation on button press
  const handleContinue = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    setErrors(newErrors);

    if (isFormValid()) {
      navigation.navigate("SetUpPin");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Personal Information" showBackButton />
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <CustomInput
          label="First Name"
          value={formData.firstName}
          onChangeText={(text) => {
            setFormData((prev) => ({ ...prev, firstName: text }));
            if (errors.firstName) {
              setErrors((prev) => ({ ...prev, firstName: "" }));
            }
          }}
          placeholder="first name"
          showShadow
          required
          errorMessage={errors.firstName}
        />

        <CustomInput
          label="Last Name"
          value={formData.lastName}
          onChangeText={(text) => {
            setFormData((prev) => ({ ...prev, lastName: text }));
            if (errors.lastName) {
              setErrors((prev) => ({ ...prev, lastName: "" }));
            }
          }}
          placeholder="last name"
          showShadow
          required
          errorMessage={errors.lastName}
        />

        <Pressable onPress={() => setShowDatePicker(true)}>
          <CustomInput
            label="Date of Birth"
            value={formatDate(formData.dateOfBirth)}
            placeholder="dd/mm/yyyy"
            showShadow
            leftIcon={
              <Ionicons
                name="calendar-outline"
                size={20}
                color={colors.gray2}
              />
            }
            onPressIn={() => setShowDatePicker(true)}
            editable={false}
          />
        </Pressable>

        {showDatePicker && (
          <DateTimePicker
            value={formData.dateOfBirth || new Date()}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={handleDateChange}
            maximumDate={new Date()}
          />
        )}

        <CustomSelect
          label="Country of Residence"
          items={countryItems}
          value={formData.country}
          onValueChange={(value: string) =>
            setFormData((prev) => ({ ...prev, country: value }))
          }
          placeholder="Select country"
          iconComponent={
            <FontAwesome name="caret-down" size={16} color={colors.gray2} />
          }
          showShadow
          showSearch
          searchPlaceholder="Search country..."
        />

        <CustomSelect
          label="State/Territory"
          items={stateItems}
          value={formData.state}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, state: value }))
          }
          placeholder="Select state"
          iconComponent={
            <FontAwesome name="caret-down" size={22} color={colors.gray2} />
          }
          showShadow
        />

        <CustomInput
          label="Address Line 1"
          value={formData.addressLine1}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, addressLine1: text }))
          }
          placeholder="Address line 1"
          showShadow
        />

        <CustomInput
          label="Address Line 2"
          value={formData.addressLine2}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, addressLine2: text }))
          }
          placeholder="Address line 2"
          showShadow
        />

        <CustomInput
          label="City"
          value={formData.city}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, city: text }))
          }
          placeholder="Address"
          showShadow
        />

        <CustomInput
          label="Postal/Zip Code"
          value={formData.postalCode}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, postalCode: text }))
          }
          placeholder="Postal"
          showShadow
        />

        <CustomButton
          title="Continue"
          onPress={handleContinue}
          style={styles.continueButton}
          borderRadius={20}
          disabled={!isFormValid()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40, // Add extra padding at the bottom
  },
  continueButton: {
    marginTop: 20,
    marginBottom: 20, // Add margin at the bottom of the button
  },
});

export default PersonalInfo;
