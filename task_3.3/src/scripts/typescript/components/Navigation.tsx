import '../styles/Navigation.scss';
// import logo from '../logo.svg';

import Home from '../pages/Home';
import PostsList from '../pages/PostsList';
import TodoList from '../pages/TodoList';
import UserList from '../pages/UserList';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Router>
      <nav className='nav'>
        <Link className='nav__link' to='/'>
          Home
        </Link>
        <Link className='nav__link' to='/PostsList'>
          Posts
        </Link>
        <Link className='nav__link' to='/TodoList'>
          Todo
        </Link>
        <Link className='nav__link' to='/UserList'>
          Userlist
        </Link>
      </nav>

      <Routes>
        <Route path='/PostsList' element={<PostsList />}></Route>
        <Route path='/TodoList' element={<TodoList />}></Route>
        <Route path='/UserList' element={<UserList />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default Navigation;
