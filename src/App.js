import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.css";

import LandingPage from './pages/LandingPage'

import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));


function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <h1 className="text-center">Test React with Redux</h1>
        <LandingPage />
      </div>
    </Provider>

  );
}

export default App;

