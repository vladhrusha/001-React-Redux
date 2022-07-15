import logo from './logo.svg';
import './styles/App.css';
import ClassCounter from './components/ClassCounter';
import FuncCounter from './components/FuncCounter';
import ReactReduxCounter from './components/ReduxReactCounter';

function App() {
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
