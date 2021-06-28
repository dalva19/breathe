import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import RatingQuote from "./components/RatingQuote";
import DogPic from "./components/DogPic";
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
          <RatingQuote />
          <DogPic />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
