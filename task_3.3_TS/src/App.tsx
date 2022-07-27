import './App.scss'
import { Navigation } from './components/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from './components/pages/Home'
import {PostList} from './components/pages/PostList'
import {TodoList} from './components/pages/TodoList'
import {UserList} from './components/pages/UserList'
function App() {

  return (
    <div className='app'>

      <Router>
        <Navigation />
        <div className="main">
          <Routes>
            <Route path='/PostList' element={<PostList />}></Route>
            <Route path='/TodoList' element={<TodoList />}></Route>
            <Route path='/UserList/*' element={<UserList />}></Route>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
      </Router>

    </div>
  )
}

export default App
