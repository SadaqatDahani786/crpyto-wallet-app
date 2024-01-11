import { View, StyleSheet, Pressable } from "react-native";
import Typographhy from "./Typography";
import theme from "../Theme/theme";

/*
 ** **
 ** ** ** Options
 ** **
 */
//Colors
const colors = {
  primary: {
    bg: theme.palette.primary.alpha,
    active: theme.palette.primary.dark,
  },
  secondary: {
    bg: theme.palette.primary.alpha,
    active: theme.palette.primary.dark,
  },
};

/*
 ** ** =======================================================================
 ** ** ** Interface [PillProps]
 ** ** =======================================================================
 */
interface PillProps {
  children: React.ReactNode;
  color?: "primary";
  onPress?: () => void;
}

/*
 ** ** =======================================================================
 ** ** ** Component [Pill]
 ** ** =======================================================================
 */
const Pill = ({
  color = "primary",
  onPress = () => "",
  children,
}: PillProps) => {
  /*
   ** **
   ** ** ** Selected Options
   ** **
   */
  const selectedColor = colors[color];

  return (
    <View style={[styles.container, { backgroundColor: colors.primary.bg }]}>
      <Pressable
        onPress={onPress}
        style={styles.presser}
        android_ripple={{ color: selectedColor.active }}
      >
        <Typographhy textAlign="center" variant="Pill" color={color}>
          {children}
        </Typographhy>
      </Pressable>
    </View>
  );
};

export default Pill;

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 32,
    borderRadius: 100,
    overflow: "hidden",
  },
  presser: {
    width: "100%",
    heiight: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
  },
});
