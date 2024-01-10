import { Pressable, StyleSheet, View } from "react-native";
import Typographhy from "./Typography";
import theme from "../Theme/theme";

/*
 ** **
 ** ** ** Options
 ** **
 */
const sizes = {
  sm: {
    width: 100,
    height: 32,
    textVariant: "Pill" as "Pill",
  },
  md: {
    width: 120,
    height: 40,
    textVariant: "Subtitle2" as "Subtitle2",
  },
  lg: {
    width: 148,
    height: 48,
    textVariant: "Subtitle1" as "Subtitle1",
  },
};

/*
 ** ** =======================================================================
 ** ** ** Interface [ButtonProps]
 ** ** =======================================================================
 */
interface ButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary";
}

/*
 ** ** =======================================================================
 ** ** ** Component [Button]
 ** ** =======================================================================
 */
const Button = ({
  size = "sm",
  variant = "contained",
  color = "primary",
  children,
}: ButtonProps) => {
  /*
   ** **
   ** ** ** Selected Optionw
   ** **
   */
  const selectedSizes = sizes[size];
  const selectedColors = theme.palette[color];
  const selectedStyles = {
    text: variant === "contained" ? "black" : "primary",
    bg: variant === "contained" ? selectedColors.main : undefined,
    borderColor: variant === "outlined" ? selectedColors.main : undefined,
    borderWidth: variant === "outlined" ? 1 : undefined,
    acitve: selectedColors.alpha,
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: selectedStyles.borderColor,
          borderWidth: selectedStyles.borderWidth,
          backgroundColor: selectedStyles.bg,
          minWidth: selectedSizes.width,
          height: selectedSizes.height,
        },
      ]}
    >
      <Pressable
        style={styles.presser}
        android_ripple={{ color: selectedStyles.acitve }}
      >
        <Typographhy
          textAlign="center"
          color={selectedStyles.text as "primary" | "black"}
          variant={selectedSizes.textVariant}
        >
          {children} 2423
        </Typographhy>
      </Pressable>
    </View>
  );
};

export default Button;

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: "hidden",
  },
  presser: {
    width: "auto",
    height: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
