import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/classCounter';
import FuncCounter from './components/funcCounter';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div className='counters'>
          <ClassCounter />
          <FuncCounter />
        </div>
      </header>
    </div>
  );
}

export default App;
