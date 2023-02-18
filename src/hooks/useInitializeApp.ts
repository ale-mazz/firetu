import {
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
  useFonts,
} from "@expo-google-fonts/lato";

/**
 * Hook to initialize the app
 */
const useInitializeApp = () => {
  const [fontsLoaded] = useFonts({
    Lato_900Black,
    Lato_700Bold,
    Lato_400Regular,
  });

  return {
    fontsLoaded,
  };
};

export default useInitializeApp;
