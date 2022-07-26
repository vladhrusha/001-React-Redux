import './UserList.scss'

import {useState, useEffect} from 'react'
import { fetchData } from '../../../scripts/fetchData'
import {User} from '../../../models/user'
import { UserPage } from './UserPage'
import {
  Link,
  Routes,
  Route,
} from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    const getData = async () => {
      setUsers(await fetchData('users'))
    }
    getData()
  }, [])

  if (users.length === 0){
  return <>Loading...</>
  }
  return (
    <div className='userList'>
      <h1 className='h1'>Users</h1>
      <table className="userList__table">
        <thead className="thead">
          <tr className="tr">
            <td className='td'>UserPage</td>
            <td className="td">Name</td>
            <td className="td">Username</td>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) =>(
              <tr key={user.id}className="tr">
                <td className='td'>
                  <Link to={`${user.id}`} className="userLink">
                    Click
                  </Link>
                </td>
                <td className="td">{user.name}</td>
                <td className="td">{user.username}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <Routes>
        {
          users.map(user => {
            return (
              <Route key={`${user.id}`} path={`${user.id}`} element={<UserPage {...user}></UserPage>}>
              </Route>
            )
          })
        }
      </Routes>
    </div>
  )
}

export { UserList }
