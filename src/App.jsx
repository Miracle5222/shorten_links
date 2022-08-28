import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import InputShortener from "./InputShortener";
import BackgroundAnimated from "./BackgroundAnimated";
import LinkResult from "./LinkResult";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <div className="boxContainer">
        <InputShortener setInputValue={setInputValue} />
        <BackgroundAnimated />
        <LinkResult inputValue={inputValue} />
      </div>
    </div>
  );
}

export default App;
