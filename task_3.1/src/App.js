import logo from './logo.svg';
import './styles/App.css';
import ClassCounter from './components/ClassCounter';
import FuncCounter from './components/FuncCounter';
import { useDispatch } from 'react-redux';
import { ReactReduxCounter } from './components/ReduxReactCounter';
import { decrement, increment, reset } from './slices/counterSlice';

import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const buttons = document.querySelectorAll('.counter__button');
    buttons.forEach((button) => {
      button.addEventListener('click', changeCounterValue);
    });
  });

  function changeCounterValue(e) {
    let buttonName = e.currentTarget.innerHTML;
    switch (buttonName) {
      case '+':
        dispatch(increment());
        break;
      case '-':
        dispatch(decrement());
        break;
      case 'Reset':
        dispatch(reset());
        break;
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div className='counters'>
          <ClassCounter />
          <FuncCounter />
          <ReactReduxCounter />
        </div>
      </header>
    </div>
  );
}

export default App;
