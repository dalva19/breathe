import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import RatingQuote from "./components/RatingQuote";
import DogPic from "./components/DogPic";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/breathe">
        <RatingQuote />
        <DogPic />
      </Route>
    </Switch>
  );
};

export default App;
