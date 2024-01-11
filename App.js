import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar as SB,
  ScrollView,
} from "react-native";
import Header from "./Components/Header";
import theme from "./Theme/theme";
import Controls from "./Components/Controls";
import Footer from "./Components/Footer";
import Tabs from "./Components/Tabs";

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
});
