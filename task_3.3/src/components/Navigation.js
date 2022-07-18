import '../styles/Navigation.scss';
import logo from '../logo.svg';

import Home from './Home';
import PostsList from './PostsList';
import TodoList from './TodoList';
import UserList from './UserList';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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

      <Switch>
        <Route path='/PostsList'>
          <PostsList />
        </Route>
        <Route path='/TodoList'>
          <TodoList />
        </Route>
        <Route path='/UserList'>
          <UserList />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
