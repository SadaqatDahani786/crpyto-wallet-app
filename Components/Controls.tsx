import { View, StyleSheet } from "react-native";
import IconButton from "./IconButton";
import theme from "../Theme/theme";
import Typographhy from "./Typography";

/*
 ** ** =======================================================================
 ** ** ** Component [Controls]
 ** ** =======================================================================
 */
const Controls = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.buttonWrapper}>
          <IconButton color="primary" size="md" icon="add" />
          <Typographhy color="white" textAlign="center" variant="Body2">
            Buy
          </Typographhy>
        </View>
        <View style={styles.buttonWrapper}>
          <IconButton color="primary" size="md" icon="arrow-up" />
          <Typographhy color="white" textAlign="center" variant="Body2">
            Sell
          </Typographhy>
        </View>
        <View style={styles.buttonWrapper}>
          <IconButton color="primary" size="md" icon="arrow-down" />
          <Typographhy color="white" textAlign="center" variant="Body2">
            Receive
          </Typographhy>
        </View>
        <View style={styles.buttonWrapper}>
          <IconButton color="primary" size="md" icon="cash" />
          <Typographhy color="white" textAlign="center" variant="Body2">
            Add Cash
          </Typographhy>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.buttonWrapper}>
          <IconButton color="primary" size="md" icon="card" />
          <Typographhy color="white" textAlign="center" variant="Body2">
            Card
          </Typographhy>
        </View>
        <View style={styles.buttonWrapper}>
          <IconButton color="primary" size="md" icon="trending-up" />
          <Typographhy color="white" textAlign="center" variant="Body2">
            Earn
          </Typographhy>
        </View>
        <View style={styles.buttonWrapper}>
          <IconButton color="primary" size="md" icon="wallet" />
          <Typographhy color="white" textAlign="center" variant="Body2">
            Wallet
          </Typographhy>
        </View>
        <View style={styles.buttonWrapper}>
          <IconButton color="primary" size="md" icon="calendar" />
          <Typographhy color="white" textAlign="center" variant="Body2">
            Recurring Buys
          </Typographhy>
        </View>
      </View>
    </View>
  );
};

export default Controls;

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: theme.spacing * 3,
    paddingRight: theme.spacing * 3,
    paddingTop: theme.spacing * 2,
    paddingBottom: theme.spacing * 2,
    gap: theme.spacing * 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 100,
  },
});
