import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handlePercentage = () => {
    if (!input) return;
    setInput((parseFloat(input) / 100).toString());
  };
  
  const handleSquareRoot = () => {
    if (!input) return;
    const squareRoot = Math.sqrt(parseFloat(input));
    setInput(squareRoot.toString());
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
      <div className="row">
          <button className="clear" onClick={clearInput}>
            C
          </button>
          <button className="two" onClick={handleBackspace}>←</button>
          <button  className="two" onClick={() => handlePercentage()}>%</button>
          <button className="two" onClick={() => handleSquareRoot()}>√</button> 
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button className="one" onClick={() => handleButtonClick("/")}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button className="one" onClick={() => handleButtonClick("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button className="one" onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button className="one" onClick={calculateResult}>=</button>
          <button className="one" onClick={() => handleButtonClick("+")}>+</button>
        </div>
        
      </div>
    </div>
  
  );
};

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
