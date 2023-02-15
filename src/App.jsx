import { Provider } from "react-redux";
import generateStore from "./redux/store";
import pokeBg from "./img/poke-bg.png";

import Pokemones from "./component/pokemones";

const App = () => {
  const store = generateStore();

  return (
    <Provider store={store}>
      <div className="relative">
        <img src={pokeBg} alt="" className="absolute z-[-1] min-h-full" />
        <Pokemones />
      </div>
    </Provider>
  );
};

export default App;
