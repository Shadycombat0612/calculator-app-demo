import React, { useState } from 'react';
import Button from './Button';
import Output from './Output';


const CalculatorPage = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(expression);
        setExpression(result);
      } catch (error) {
        setExpression('Error');
      }
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="calculator p-4 border rounded shadow">
            <Output expression={expression} />
            <div className="buttons mt-4">
              <div className="row">
                <Button label="1" onClick={() => handleButtonClick("1")} className="btn btn-primary col" />
                <Button label="2" onClick={() => handleButtonClick("2")} className="btn btn-primary col" />
                <Button label="3" onClick={() => handleButtonClick("3")} className="btn btn-primary col" />
                <Button label="+" onClick={() => handleButtonClick("+")} className="btn btn-secondary col" />
              </div>
              <div className="row">
                <Button label="4" onClick={() => handleButtonClick("4")} className="btn btn-primary col" />
                <Button label="5" onClick={() => handleButtonClick("5")} className="btn btn-primary col" />
                <Button label="6" onClick={() => handleButtonClick("6")} className="btn btn-primary col" />
                <Button label="-" onClick={() => handleButtonClick("-")} className="btn btn-secondary col" />
              </div>
              <div className="row">
                <Button label="7" onClick={() => handleButtonClick("7")} className="btn btn-primary col" />
                <Button label="8" onClick={() => handleButtonClick("8")} className="btn btn-primary col" />
                <Button label="9" onClick={() => handleButtonClick("9")} className="btn btn-primary col" />
                <Button label="*" onClick={() => handleButtonClick("*")} className="btn btn-secondary col" />
              </div>
              <div className="row">
                <Button label="0" onClick={() => handleButtonClick("0")} className="btn btn-primary col" />
                <Button label="=" onClick={() => handleButtonClick("=")} className="btn btn-success col-6" />
                <Button label="/" onClick={() => handleButtonClick("/")} className="btn btn-secondary col" />
                <Button label="C" onClick={() => setExpression('')} className="btn btn-danger col-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
