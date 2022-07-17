import { React } from 'react';
import { useSelector } from 'react-redux';

import CounterButton from './CounterButton';

function ReactReduxCounter() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className='counter'>
      <h2>react-redux</h2>
      <h3 className='result'>{count}</h3>
      <CounterButton text='+' />
      <CounterButton text='-' />
      <CounterButton text='Reset' />
    </div>
  );
}

export default ReactReduxCounter;
