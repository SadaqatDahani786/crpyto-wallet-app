import { Text } from "react-native";
import theme from "../Theme/theme";

/*
 ** **
 ** ** ** Styles
 ** **
 */
//Variants
const variants = {
  H1: {
    fontSize: 30,
    fontWeight: "bold",
  },
  H2: {
    fontSize: 26,
    fontWeight: "bold",
  },
  Subtitle1: {
    fontSize: 18,
    fontWeight: "normal",
  },
  Subtitle2: {
    fontSize: 16,
    fontWeight: "normal",
  },
};

//Colors
const colors = {
  white: theme.palette.common.white,
  black: theme.palette.common.black,
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
};

/*
 ** ** =======================================================================
 ** ** ** Interface [TypographyProps]
 ** ** =======================================================================
 */
interface TypographyProps {
  children: React.ReactNode;
  variant?: "H1" | "H2" | "Subtitle1" | "Subtitle2";
  color?: "white" | "black" | "primary" | "secondary";
  uppercase?: "true" | true | "false" | false | "default";
  textAlign?: "center" | "left" | "right";
}

/*
 ** ** =======================================================================
 ** ** ** Component [Typography]
 ** ** =======================================================================
 */
const Typographhy = ({
  children,
  variant = "Subtitle1",
  color = "black",
  uppercase = "default",
  textAlign = "left",
}: TypographyProps) => {
  /*
   ** **
   ** ** ** Selected options
   ** **
   */
  const selectedSize = variants[variant];
  const selectedColor = colors[color];

  return (
    <Text
      style={{
        fontSize: selectedSize.fontSize,
        fontWeight: selectedSize.fontWeight as "bold" | "normal",
        color: selectedColor,
        textAlign: textAlign,
        textTransform:
          uppercase === "true" || uppercase === true
            ? "uppercase"
            : uppercase === false || uppercase === "false"
            ? "lowercase"
            : "none",
      }}
    >
      {children}
    </Text>
  );
};

export default Typographhy;
