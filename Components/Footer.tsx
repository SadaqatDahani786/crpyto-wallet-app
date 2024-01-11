import { StyleSheet, View } from "react-native";
import Button from "./Button";
import theme from "../Theme/theme";

/*
 ** ** =======================================================================
 ** ** ** Components [Footer]
 ** ** =======================================================================
 */
const Footer = () => {
  return (
    <View style={styles.container}>
      <Button size="lg" color="primary" corners="full rounded">
        Sign Up
      </Button>
      <Button
        size="lg"
        color="primary"
        variant="outlined"
        corners="full rounded"
      >
        Sign In
      </Button>
    </View>
  );
};

export default Footer;

/*
 ** **
 ** ** ** Options
 ** **
 */
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    borderTopWidth: 1,
    borderColor: theme.palette.primary.alpha,
    backgroundColor: theme.palette.primary.dark,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: theme.spacing * 3,
    paddingRight: theme.spacing * 3,
  },
});
