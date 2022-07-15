import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../slices/counterSlice';

function ReactReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='counter'>
      <h2>react-redux</h2>
      <h3 className='result'>{count}</h3>
      <h5
        className='controlButton increaseButton'
        onClick={() => dispatch(increment())}
      >
        +
      </h5>
      <h5
        className='controlButton decreaseButton'
        onClick={() => dispatch(decrement())}
      >
        -
      </h5>
      <h4
        className='controlButton resetButton'
        onClick={() => dispatch(reset())}
      >
        Reset
      </h4>
    </div>
  );
}

export default ReactReduxCounter;
