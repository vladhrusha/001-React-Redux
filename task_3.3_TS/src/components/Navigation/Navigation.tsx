import './Navigation.scss'
import Home from '../pages/Home'
import PostsList from '../pages/PostsList'
import TodoList from '../pages/TodoList'
import UserList from '../pages/UserList'

import {IUsers, ITodos, IPosts, IPostsProps, IUsersProps, ITodosProps} from '../../interfaces/JSONPlaceholderTypes'
import { fetchData } from '../../scripts/fetchData'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {useState, useEffect} from 'react'

const Navigation = () => {

  const [users, setUsers] = useState<IUsers>()
  const [todos, setTodos] = useState<ITodos>()
  const [posts, setPosts] = useState<IPosts>()
  const postsProps : IPostsProps = {} as IPostsProps
  const usersProps : IUsersProps = {} as IUsersProps
  const todosProps : ITodosProps = {} as ITodosProps


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setUsers(await fetchData('users'))
    setTodos(await fetchData('todos'))
    setPosts(await fetchData('posts'))
  }

  if (users && todos && posts){
        postsProps.posts = posts
        usersProps.users = users
        todosProps.todos = todos
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
        <Route path='/PostsList' element={<PostsList  {...postsProps}/>}></Route>
        <Route path='/TodoList' element={<TodoList {...todosProps}/>}></Route>
        <Route path='/UserList' element={<UserList {...usersProps}/>}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  )
  }
  return (<div></div>)



}




export default Navigation
