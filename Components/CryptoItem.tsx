import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Typographhy from "./Typography";
import theme from "../Theme/theme";

/*
 ** ** =======================================================================
 ** ** ** Interface [CryptoItemProps]
 ** ** =======================================================================
 */
interface CryptoItemProps {
  img: ImageSourcePropType;
  name: string;
  short_name: string;
  price: string;
  trending_direction: "UPWARD" | "DOWNWARD";
  trending_percent: string;
}

/*
 ** ** =======================================================================
 ** ** ** Component [CryptoItem]
 ** ** =======================================================================
 */
const CryptoItem = ({
  img,
  name,
  short_name,
  price,
  trending_direction = "UPWARD",
  trending_percent = "0.0%",
}: CryptoItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={img}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </View>
      <View style={[styles.col, { flex: 1 }]}>
        <Typographhy variant="Subtitle1" color="white">
          {name}
        </Typographhy>
        <Typographhy variant="Body1" color="gray-light" uppercase="true">
          {short_name}
        </Typographhy>
      </View>
      <View style={styles.col}>
        <Typographhy variant="Body1" textAlign="right" color="white">
          {price}
        </Typographhy>
        <View style={styles.row}>
          <Ionicons
            size={24}
            name={
              trending_direction === "UPWARD" ? "trending-up" : "trending-down"
            }
            color={trending_direction === "UPWARD" ? "green" : "red"}
          />
          <Typographhy
            variant="Body1"
            textAlign="right"
            color={trending_direction === "UPWARD" ? "success" : "danger"}
            uppercase="true"
          >
            {trending_percent}
          </Typographhy>
        </View>
      </View>
    </View>
  );
};

export default CryptoItem;

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: theme.spacing * 3,
    paddingRight: theme.spacing * 3,
    paddingTop: theme.spacing,
    paddingBottom: theme.spacing,
    gap: theme.spacing,
  },
  imageWrapper: {
    width: 50,
    height: 50,
    borderWidth: 1,
  },
  row: { flexDirection: "row", alignItems: "center", gap: theme.spacing },
  col: {
    gap: theme.spacing,
  },
});
