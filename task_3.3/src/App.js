import logo from './logo.svg';
import '../src/styles/App.scss';
import Navigation from './components/Navigation';
import PostsList from './components/PostsList';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
