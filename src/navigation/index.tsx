import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Settings from "../screens/Settings/Settings";
import AddTodo from "../screens/AddTodo";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Group
          screenOptions={{
            headerShown: false,
            presentation: "modal",
          }}
        >
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: false,
            presentation: "transparentModal",
            animation: "fade",
          }}
        >
          <Stack.Screen name="AddTodo" component={AddTodo} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
