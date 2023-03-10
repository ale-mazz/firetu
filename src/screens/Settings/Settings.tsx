import React from "react";
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { useRecoilValue } from "recoil";
import userState from "../../recoil/userState";
import { Edge, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

interface Props {}

const Settings = ({}: Props) => {
  const user = useRecoilValue(userState);
  const { logout, loading } = useFirebaseAuth();
  const edges: Edge[] = Platform.OS === "ios" ? ["bottom"] : ["top", "bottom"];

  return (
    <SafeAreaView edges={edges} style={styles.container}>
      <StatusBar style={Platform.OS === "android" ? "dark" : "light"} />
      <View style={styles.innerView}>
        <View style={styles.textContainer}>
          <Text style={styles.header1}>Developed by </Text>
          <Text style={styles.header2}>Alessandro Mazzon </Text>
          <Text style={styles.header1}>with ❤️</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.middleText}>Current logged in user: </Text>
          <Text style={styles.middleTextBold}>{user?.email}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <ActivityIndicator
          animating={loading}
          style={styles.loadingIndicator}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCDDB0",
    paddingHorizontal: 14,
    paddingTop: 12,
  },
  flexRow: { flexDirection: "row", marginBottom: 24 },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  innerView: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFAD7",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  header1: {
    fontSize: 18,
    fontFamily: "Lato_400Regular",
  },
  header2: {
    fontSize: 18,
    fontFamily: "Lato_700Bold",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 8,
    backgroundColor: "#FF9F9F",
    marginBottom: 12,
  },
  buttonText: {
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  middleText: {
    fontFamily: "Lato_400Regular",
    fontSize: 16,
    textAlign: "center",
    color: "#FF9F9F",
  },
  middleTextBold: {
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    textAlign: "center",
    color: "#E97777",
  },
  loadingIndicator: { marginBottom: 12 },
});

export default Settings;
