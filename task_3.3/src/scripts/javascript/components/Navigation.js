import '../../../styles/Navigation.scss';
import React from 'react';
import Home from '../pages/Home';
import PostsList from '../pages/PostsList';
import TodoList from '../pages/TodoList';
import UserList from '../pages/UserList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
var Navigation = function () {
    return (React.createElement(Router, null,
        React.createElement("nav", { className: 'nav' },
            React.createElement(Link, { className: 'nav__link', to: '/' }, "Home"),
            React.createElement(Link, { className: 'nav__link', to: '/PostsList' }, "Posts"),
            React.createElement(Link, { className: 'nav__link', to: '/TodoList' }, "Todo"),
            React.createElement(Link, { className: 'nav__link', to: '/UserList' }, "Userlist")),
        React.createElement(Switch, null,
            React.createElement(Route, { path: '/PostsList' },
                React.createElement(PostsList, null)),
            React.createElement(Route, { path: '/TodoList' },
                React.createElement(TodoList, null)),
            React.createElement(Route, { path: '/UserList' },
                React.createElement(UserList, null)),
            React.createElement(Route, { path: '/' },
                React.createElement(Home, null)))));
};
export default Navigation;
