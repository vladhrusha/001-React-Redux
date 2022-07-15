import { React, useState } from 'react';

function FuncCounterRedux() {
  const [result, setResult] = useState(0);

  const onIncrease = () => {
    setResult(result + 1);
  };
  const onDecrease = () => {
    setResult(result - 1);
  };
  const onReset = () => {
    setResult(0);
  };

  return (
    <div className='counter'>
      <h2>Func Redux</h2>
      <h3 className='result'>{result}</h3>
      <h5 className='controlButton increaseButton' onClick={onIncrease}>
        +
      </h5>
      <h5 className='controlButton decreaseButton' onClick={onDecrease}>
        -
      </h5>
      <h4 className='controlButton resetButton' onClick={onReset}>
        Reset
      </h4>
    </div>
  );
}

export default FuncCounterRedux;
