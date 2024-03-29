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
    fontWeight: "bold",
  },
  Subtitle2: {
    fontSize: 16,
    fontWeight: "bold",
  },
  Body1: {
    fontSize: 18,
    fontWeight: "normal",
  },
  Body2: {
    fontSize: 16,
    fontWeight: "normal",
  },
  Pill: {
    fontSize: 12,
    fontWeight: "bold",
  },
};

//Colors
const colors = {
  white: theme.palette.common.white,
  black: theme.palette.common.black,
  "gray-dark": theme.palette.common.gray[200],
  gray: theme.palette.common.gray[400],
  "gray-light": theme.palette.common.gray[500],
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
  danger: theme.palette.accent.danger,
  success: theme.palette.accent.success,
  info: theme.palette.accent.info,
  warn: theme.palette.accent.warn,
};

/*
 ** ** =======================================================================
 ** ** ** Interface [TypographyProps]
 ** ** =======================================================================
 */
interface TypographyProps {
  children: React.ReactNode;
  variant?:
    | "H1"
    | "H2"
    | "Subtitle1"
    | "Subtitle2"
    | "Body1"
    | "Body2"
    | "Pill";
  color?:
    | "white"
    | "black"
    | "gray"
    | "gray-light"
    | "gray-dark"
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warn"
    | "info";
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
  variant = "Body2",
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
