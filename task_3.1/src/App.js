import logo from './logo.svg';
import './styles/App.css';
import ClassCounter from './components/ClassCounter';
import FuncCounter from './components/FuncCounter';
import FuncCounterRedux from './components/FuncCounterRedux';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div className='counters'>
          <ClassCounter />
          <FuncCounter />
          <FuncCounterRedux />
        </div>
      </header>
    </div>
  );
}

export default App;
