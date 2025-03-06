import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ChevronDown = ({ width, height, color, ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 14 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.28 0.999992L7.9333 5.34666C7.41997 5.85999 6.57997 5.85999 6.06664 5.34666L1.71997 0.999992"
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ChevronDown;
