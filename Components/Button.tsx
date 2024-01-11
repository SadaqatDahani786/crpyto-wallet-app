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
  corners?: "none" | "rounded" | "full rounded";
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
  corners = "rounded",
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
    text: variant === "contained" ? "white" : color,
    bg: variant === "contained" ? selectedColors.main : undefined,
    borderColor: variant === "outlined" ? selectedColors.main : undefined,
    borderWidth: variant === "outlined" ? 1 : undefined,
    acitve: selectedColors.light,
    borderRadius:
      corners === "rounded" ? 8 : corners === "full rounded" ? 10000 : 0,
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
          borderRadius: selectedStyles.borderRadius,
        },
      ]}
    >
      <Pressable
        style={styles.presser}
        android_ripple={{ color: selectedStyles.acitve }}
      >
        <Typographhy
          textAlign="center"
          color={selectedStyles.text as "primary" | "secondary" | "white"}
          variant={selectedSizes.textVariant}
        >
          {children}
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
