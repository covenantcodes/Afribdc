import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Card = ({ width, height, fillColor, ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.05371 10H22.0537"
      stroke={fillColor}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.602 20.4998H6.492C2.942 20.4998 2.04199 19.6198 2.04199 16.1098V7.88977C2.04199 4.70977 2.78202 3.68977 5.57202 3.52977C5.85202 3.51977 6.162 3.50977 6.492 3.50977H17.602C21.152 3.50977 22.052 4.38977 22.052 7.89977V12.3098"
      stroke={fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.05371 16H10.0537"
      stroke={fillColor}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22.0537 18C22.0537 18.75 21.8437 19.46 21.4737 20.06C20.7837 21.22 19.5137 22 18.0537 22C16.5937 22 15.3237 21.22 14.6337 20.06C14.2637 19.46 14.0537 18.75 14.0537 18C14.0537 15.79 15.8437 14 18.0537 14C20.2637 14 22.0537 15.79 22.0537 18Z"
      stroke={fillColor}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.4951 17.9995L17.4851 18.9895L19.6151 17.0195"
      stroke={fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Card;
