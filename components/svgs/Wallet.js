import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Wallet = ({ width, height, fillColor, strokeWidth, ...props }) => (
  <Svg
    width={width}
    height={width}
    viewBox="0 0 169 169"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M127.033 95.4138C124.075 98.3009 122.385 102.456 122.808 106.892C123.442 114.497 130.413 120.06 138.018 120.06H151.397V128.439C151.397 143.016 139.497 154.916 124.92 154.916H44.0821C29.5059 154.916 17.6055 143.016 17.6055 128.439V81.049C17.6055 66.4728 29.5059 54.5723 44.0821 54.5723H124.92C139.497 54.5723 151.397 66.4728 151.397 81.049V91.189H137.173C133.23 91.189 129.638 92.738 127.033 95.4138Z"
      stroke={fillColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.6055 87.3877V55.2076C17.6055 46.828 22.7459 39.3636 30.5621 36.4061L86.473 15.2811C95.2046 11.9715 104.57 18.45 104.57 27.8154V54.5737"
      stroke={fillColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M158.853 98.3726V112.879C158.853 116.752 155.755 119.92 151.811 120.061H138.01C130.405 120.061 123.433 114.498 122.8 106.893C122.377 102.457 124.067 98.3023 127.025 95.4153C129.63 92.7394 133.221 91.1904 137.165 91.1904H151.811C155.755 91.3313 158.853 94.4997 158.853 98.3726Z"
      stroke={fillColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M49.293 84.5H98.5846"
      stroke={fillColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Wallet;
