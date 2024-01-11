import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar as SB,
  ScrollView,
  View,
} from "react-native";

import theme from "./Theme/theme";

//Components
import Header from "./Components/Header";
import Controls from "./Components/Controls";
import Footer from "./Components/Footer";
import Tabs from "./Components/Tabs";
import CryptoItem from "./Components/CryptoItem";

//Images
import btcImage from "./assets/bitcoin-btc-logo.png";
import ethImage from "./assets/ethereum-eth-logo.png";

/*
 ** ** =======================================================================
 ** ** ** Component [App]
 ** ** =======================================================================
 */
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor={theme.palette.primary.dark} />
      <ScrollView style={{ height: "auto", width: "100%" }}>
        <Header />
        <Controls />
        <Tabs />
        <View style={styles.cryptoWrapper}>
          <CryptoItem
            img={btcImage}
            name="Bitcoin"
            short_name="btc"
            price="€36,680.21"
            trending_percent="3.36%"
            trending_direction="UPWARD"
          />
          <CryptoItem
            img={ethImage}
            name="Ethereum"
            short_name="eth"
            price="€24,450.66"
            trending_percent="2.66%"
            trending_direction="DOWNWARD"
          />
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.common.black,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? SB.currentHeight : 0,
  },
  cryptoWrapper: {
    marginTop: theme.spacing * 3,
    gap: theme.spacing,
  },
});
