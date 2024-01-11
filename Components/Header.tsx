import { View, StyleSheet, Image } from "react-native";
import Typography from "./Typography";
import theme from "../Theme/theme";
import bg from "../assets/bitcoin.webp";

/*
 ** ** =======================================================================
 ** ** ** Component [Header]
 ** ** =======================================================================
 */
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Typography textAlign="center" color="white" variant="H1">
          The future of money is here
        </Typography>
        <Typography textAlign="center" color="white" variant="Subtitle2">
          Simple and securely buy, sell and manage hundreds of cryptocurrencies.
        </Typography>
      </View>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={bg} />
      </View>
    </View>
  );
};

export default Header;

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.primary.dark,
    width: "100%",
    height: 340,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "70%",
    margin: "auto",
    justifyContent: "center",
    flex: 1,
  },
  imageWrapper: {
    width: "100%",
    height: 180,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
