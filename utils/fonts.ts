import { RFValue } from "react-native-responsive-fontsize";

import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const FONTFAMILY = {
    bold: "JostBold",
    regular: "JostRegular",
    light: "JostLight",
    semibold: "JostSemiBold",
    heavy: "JostExtraBold",
    medium: "JostMedium",
  };
  
  export const FONTSIZE = {
    xs: RFValue(12, height),
    sm: RFValue(14, height),
    md: RFValue(16, height),
    lg: RFValue(20, height),
    xl: RFValue(24, height),
    xxl: RFValue(32, height),
    xxxl: RFValue(36, height),
  };

  export const LINEHEIGHT = {
    tight: 16,
    normal: 20,
    relaxed: 24,
  };
  