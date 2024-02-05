import { Text, View } from "react-native";
import Navigation from "./src/navigations/navigation";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
