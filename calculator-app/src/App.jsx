import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*',
          '1', '2', '3', '-', '0', '.', '=','%', '+'].map((btn) =>
          btn === '=' ? (
            <button key={btn} onClick={handleCalculate}>{btn}</button>
          ) : (
            <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
          )
        )}
        <button className="clear" onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default App;
