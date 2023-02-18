import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useInitializeApp from "../../hooks/useInitializeApp";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import Settings from "../../screens/Settings/Settings";
import AddTodo from "../../screens/AddTodo";
import WelcomePage from "../../screens/WelcomePage/WelcomePage";
import useListenToAuth from "../../hooks/useListenToAuth";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import SignupOrLogin from "../../screens/SignupOrLogin/SignupOrLogin";

const Stack = createNativeStackNavigator();

/**
 * Root navigator for the app
 */
export const RootNavigator = () => {
  const [initialRoute, setInitialRoute] = useState("WelcomePage");
  const { fontsLoaded } = useInitializeApp();
  const { user, initializing } = useListenToAuth();

  const onReady = useCallback(async () => {
    if (fontsLoaded && !initializing) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, initializing]);

  useEffect(() => {
    if (user) {
      setInitialRoute("Home");
    } else {
      setInitialRoute("WelcomePage");
    }
  }, [user]);

  if (initializing || !fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onReady}>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="SignupOrLogin" component={SignupOrLogin} />
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
