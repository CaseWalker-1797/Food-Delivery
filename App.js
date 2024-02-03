import { Text, View } from "react-native";
import Navigation from "./src/navigations/navigation";
import {store} from './src/store/store'
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App