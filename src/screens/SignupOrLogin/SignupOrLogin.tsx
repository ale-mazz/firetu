import React, { useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { StatusBar } from "expo-status-bar";
import { getAuthErrorMessage } from "../../utils/getAuthErrorMessage";

interface Props {}

const SignupOrLogin = ({}: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, setError, login, signup, loading } = useFirebaseAuth();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <TouchableOpacity
        style={styles.fakeButton}
        activeOpacity={1}
        onPress={Keyboard.dismiss}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={100}
          style={styles.flexCenter}
        >
          <View style={styles.innerView}>
            <Text style={styles.header}>
              Enter your informations to {"\n"}Login or Signup
            </Text>

            <TextInput
              style={styles.input}
              placeholder={"Email"}
              value={email}
              clearButtonMode={"always"}
              autoCapitalize={"none"}
              autoFocus={true}
              autoCorrect={true}
              autoComplete={"email"}
              onTextInput={() => setError(null)}
              onChangeText={(e) => setEmail(e)}
            />
            <TextInput
              style={styles.input}
              placeholder={"Password"}
              value={password}
              clearButtonMode={"always"}
              secureTextEntry={true}
              onTextInput={() => setError(null)}
              onChangeText={(e) => setPassword(e)}
            />
            <TouchableOpacity
              onPress={() => login(email, password)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.middleText}>| |</Text>
            <TouchableOpacity
              onPress={() => signup(email, password)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
            <ActivityIndicator
              animating={loading}
              style={styles.loadingIndicator}
            />
          </View>
          {error && (
            <Text style={styles.errorText}>{getAuthErrorMessage(error)}</Text>
          )}
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCDDB0",
    justifyContent: "center",
  },
  flexCenter: { flex: 1, justifyContent: "center" },
  innerView: {
    padding: 36,
    margin: 12,
    borderRadius: 8,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#FFFAD7",
  },
  header: { fontSize: 20, fontFamily: "Lato_700Bold", marginBottom: 24 },
  input: {
    padding: 12,
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#FFE7CC",
    borderRadius: 8,
    marginBottom: 24,
  },
  button: { padding: 12, borderRadius: 8, backgroundColor: "#FF9F9F" },
  buttonText: {
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  middleText: {
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    textAlign: "center",
    color: "#FF9F9F",
    marginVertical: 8,
  },
  errorText: {
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    textAlign: "center",
    color: "#E97777",
    marginVertical: 8,
  },
  fakeButton: { flex: 1, justifyContent: "center" },
  loadingIndicator: { marginTop: 24 },
});

export default SignupOrLogin;
