import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { useRecoilValue } from "recoil";
import userState from "../../recoil/userState";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

const Settings = ({}: Props) => {
  const user = useRecoilValue(userState);
  const { logout } = useFirebaseAuth();
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <View style={styles.innerView}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.header1}>Developed by </Text>
          <Text style={styles.header2}>Alessandro Mazzon </Text>
          <Text style={styles.header1}>with ❤️</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.middleText}>Current logged in user: </Text>
          <Text style={styles.middleTextBold}>{user?.email}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCDDB0",
    paddingHorizontal: 12,
    paddingTop: 12,
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
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#FF9F9F",
    marginBottom: 36,
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
    marginBottom: 12,
  },
  middleTextBold: {
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    textAlign: "center",
    color: "#E97777",
    marginBottom: 12,
  },
});

export default Settings;
