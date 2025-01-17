import React, { useState } from "react";

const CalculatorWithJestTestCases = () => {
  const [inputValue, setInputValue] = useState("");

  const handleCalculations = (value) => {
   console.log('value', value);
   if (value === "=") {
    try {
      const result = new Function(`return ${inputValue}`)();
      setInputValue(result.toString());
    } catch (error) {
      setInputValue("Enter the number");
    }
  } else if (value === "C") {
    setInputValue(""); 
  } else {
    if (inputValue === "Enter the number" && !["+","-"].includes(value)) {
      setInputValue(value); 
    } else {
      if (["+","-"].includes(value)) {
        if (inputValue && !["+","-"].includes(inputValue.slice(-1))) {
          setInputValue((prevInput) => prevInput + value);
        }
      } else {
        setInputValue((prevInput) => prevInput + value);
      }
    }
  }
  };
  

  return (
    <>
      <div className="calc">
        <div className="display" data-testid="result">{inputValue || "0"}</div>
        <div className="buttons">
          <button data-testid="7" onClick={() => handleCalculations("7")}>7</button>
          <button data-testid="8" onClick={() => handleCalculations("8")}>8</button>
          <button data-testid="9" onClick={() => handleCalculations("9")}>9</button>
          <button data-testid="-" onClick={() => handleCalculations("-")}>-</button>
          <button data-testid="4" onClick={() => handleCalculations("4")}>4</button>
          <button data-testid="5" onClick={() => handleCalculations("5")}>5</button>
          <button data-testid="6" onClick={() => handleCalculations("6")}>6</button>
          <button data-testid="1" onClick={() => handleCalculations("1")}>1</button>
          <button data-testid="2" onClick={() => handleCalculations("2")}>2</button>
          <button data-testid="3" onClick={() => handleCalculations("3")}>3</button>
          <button data-testid="0" onClick={() => handleCalculations("0")}>0</button>
          <button data-testid="." onClick={() => handleCalculations(".")}>.</button>
          <button data-testid="+" onClick={() => handleCalculations("+")}>+</button>
          <button data-testid="=" onClick={() => handleCalculations("=")}>=</button>
        </div>
      </div>
    </>
  );
};

export default CalculatorWithJestTestCases;
