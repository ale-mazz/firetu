import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { firetuIcon } from "../../assets/images";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

interface Props {}

const WelcomePage = ({}: Props) => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.centeredInnerContainer}>
        <Image source={firetuIcon} style={styles.logo} contentFit={"cover"} />
        <View style={styles.innerContainer}>
          <View style={styles.headers}>
            <Text style={styles.header1}>Welcome to </Text>
            <Text style={styles.header2}>Firetu</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignupOrLogin")}
          >
            <Text style={styles.buttonText}>Signup or Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCDDB0",
    paddingVertical: 24,
    paddingHorizontal: 18,
    justifyContent: "center",
  },
  centeredInnerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    marginTop: 24,
  },
  header1: {
    fontSize: 32,
    fontFamily: "Lato_400Regular",
  },
  headers: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
  },
  header2: {
    fontSize: 32,
    fontFamily: "Lato_900Black",
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
  logo: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 24,
    alignSelf: "center",
  },
});

export default WelcomePage;
