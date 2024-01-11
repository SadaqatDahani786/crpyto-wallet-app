import { StyleSheet, View } from "react-native";
import Pill from "./Pill";
import Typographhy from "./Typography";
import IconButton from "./IconButton";
import theme from "../Theme/theme";

/*
 ** ** =======================================================================
 ** ** ** Components [Tabs]
 ** ** =======================================================================
 */
const Tabs = () => {
  return (
    <View style={styles.row}>
      <View style={styles.wrapper}>
        <Pill color="primary">Tradable</Pill>
        <Typographhy variant="Pill" color="white">
          Assets
        </Typographhy>
      </View>
      <IconButton icon="search" color="secondary" />
    </View>
  );
};

export default Tabs;

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: theme.spacing * 3,
    paddingRight: theme.spacing * 3,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing,
  },
});
