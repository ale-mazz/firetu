import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface Props extends ViewProps {}

/**
 * Top bar component to display on top of the screen
 * @param rest - other props
 * @constructor
 */
const TopBar = ({ ...rest }: Props) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container} {...rest}>
      <View style={styles.headers}>
        <Text style={styles.header}>F</Text>
        <Text style={styles.header2}>iretu</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Feather name="settings" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCDDB0",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    height: 52,
    width: 52,
  },
  headers: { flexDirection: "row", marginBottom: 10 },
  header: { fontSize: 40, fontFamily: "Lato_900Black" },
  header2: { fontSize: 40, fontFamily: "Lato_400Regular" },
});

export default TopBar;
