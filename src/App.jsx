import { Provider } from "react-redux";
import generateStore from "./redux/store";

import Pokemones from "./component/pokemones";

const App = () => {
  const store = generateStore();

  return (
    <Provider store={store}>
      <div className="w-100 bg-dark container">
        <h3 className="text-white ">POKEDEX APP</h3>
      </div>
      <div className="container mt-3">
        <Pokemones />
      </div>
    </Provider>
  );
};

export default App;
