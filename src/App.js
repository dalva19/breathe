import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Breathe from "./components/Breathe";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/breathe">
          <Breathe />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
