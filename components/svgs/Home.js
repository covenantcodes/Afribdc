import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Home = ({ width, height, fillColor, ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 19 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.922 18.2581H3.922C2.625 18.2541 1.574 17.2071 1.566 15.9101V7.95305C1.566 7.51905 1.762 7.10905 2.094 6.83205L2.801 6.30805C3.059 6.03505 3.082 5.61705 2.863 5.31205C2.641 5.00805 2.234 4.90605 1.895 5.06605L1.176 5.60505C0.445 6.16805 0.016 7.03105 0 7.95305V15.9181C0.004 18.0821 1.758 19.8361 3.922 19.8401H7.922C8.355 19.8401 8.703 19.4881 8.703 19.0591C8.703 18.6251 8.355 18.2741 7.922 18.2741V18.2581Z"
      fill={fillColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7932 7.93425C18.7812 7.02325 18.3632 6.16025 17.6522 5.58625L11.6452 0.79725C10.3242 -0.26575 8.44117 -0.26575 7.12117 0.79725L5.21917 2.18025C4.85917 2.43725 4.77717 2.93425 5.03517 3.29325C5.29317 3.64825 5.78917 3.73025 6.14817 3.47325L8.07817 2.03125C8.83617 1.40625 9.93017 1.40625 10.6882 2.03125L16.6952 6.82025C17.0432 7.09825 17.2462 7.51225 17.2542 7.95325V15.9183C17.2542 17.2153 16.1992 18.2663 14.9062 18.2663H13.1212C12.9382 18.2663 12.7932 18.1173 12.7932 17.9342V14.3442C12.7932 13.1992 11.8672 12.2692 10.7232 12.2662H8.11317C7.56217 12.2662 7.03517 12.4843 6.64517 12.8752C6.25417 13.2662 6.03517 13.7933 6.03517 14.3442V15.7192C6.03517 16.1483 6.38717 16.5002 6.81617 16.5002C7.25017 16.5002 7.60217 16.1483 7.60217 15.7192V14.3442C7.59817 14.2072 7.64817 14.0782 7.74617 13.9803C7.84017 13.8872 7.96917 13.8322 8.10517 13.8322H10.7152C10.9922 13.8322 11.2192 14.0592 11.2192 14.3363V17.9342C11.2232 18.9842 12.0742 19.8323 13.1212 19.8323H14.8592C17.0272 19.8323 18.7812 18.0742 18.7812 15.9102L18.7932 7.93425Z"
      fill={fillColor}
    />
  </Svg>
);
export default Home;
