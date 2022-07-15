import { React, useState } from 'react';

function FuncCounter() {
  const [result, setResult] = useState(0);

  const increase = () => {
    setResult(result + 1);
  };
  const decrease = () => {
    setResult(result - 1);
  };
  const reset = () => {
    setResult(0);
  };

  return (
    <div className='counter'>
      <h2>Func</h2>
      <h3 className='result'>{result}</h3>
      <h5 className='controlButton increaseButton' onClick={increase}>
        +
      </h5>
      <h5 className='controlButton decreaseButton' onClick={decrease}>
        -
      </h5>
      <h4 className='controlButton resetButton' onClick={reset}>
        Reset
      </h4>
    </div>
  );
}

export default FuncCounter;
