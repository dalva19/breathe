import "./App.css";
import React, { useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
import { loadDailyQuote } from "./actions/daily_quote_action";

function App() {
  const dispatch = useDispatch();

  const handleTestClick = () => {
    dispatch(loadDailyQuote());
  };

  return (
    <div className="App">
      <h1>Hello Breathe!</h1>
      <button onClick={handleTestClick}>Test</button>
    </div>
  );
}

export default App;
