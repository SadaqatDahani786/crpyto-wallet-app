import { View, Pressable, Text, StyleSheet } from "react-native";
import theme from "../Theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

/*
 ** **
 ** ** ** Options
 ** **
 */
//Sizes
const sizes = {
  md: { icon: 24, button: 48 },
  lg: { icon: 32, button: 64 },
};

//Colors
const colors = {
  primary: {
    button: theme.palette.primary.main,
    active: theme.palette.primary.light,
    icon: theme.palette.common.white,
  },
  secondary: {
    button: theme.palette.secondary.main,
    active: theme.palette.primary.light,
    icon: theme.palette.common.white,
  },
};

/*
 ** ** =======================================================================
 ** ** ** Interface [IconButtonProps]
 ** ** =======================================================================
 */
interface IconButtonProps {
  onPress?: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  size?: "md" | "lg";
  color?: "primary" | "secondary";
}

/*
 ** ** =======================================================================
 ** ** ** Component [IconButton]
 ** ** =======================================================================
 */
const IconButton = ({
  icon = "add",
  size = "md",
  color = "primary",
  onPress = () => "",
}: IconButtonProps) => {
  /*
   ** **
   ** ** ** Selected Options
   ** **
   */
  const selectedSize = sizes[size];
  const selectedColor = colors[color];

  return (
    <View
      style={[
        styles.container,
        {
          width: selectedSize.button,
          height: selectedSize.button,
          backgroundColor: selectedColor.button,
        },
      ]}
    >
      <Pressable
        style={styles.wrapper}
        android_ripple={{ color: "white" }}
        onPress={onPress}
      >
        <Text>
          <Ionicons
            size={selectedSize.icon}
            name={icon}
            color={selectedColor.icon}
          />
        </Text>
      </Pressable>
    </View>
  );
};

export default IconButton;

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    overflow: "hidden",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
