import { React } from 'react';

function CounterButton(props) {
  return <button className='counter__button'>{props.text}</button>;
}

export default CounterButton;
