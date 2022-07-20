import './UserList.scss'

import {useState, useEffect} from 'react'
import { fetchData } from '../../../scripts/fetchData'
import {User} from '../../../models/user'

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
    <table className="table">
      <thead className="thead">
        <tr className="tr">
          <td className="td">Name</td>
          <td className="td">Username</td>
        </tr>
      </thead>
      <tbody>
        {
        users.map((user) =>(
          <tr key={user.id}className="tr">
            <td className="td">{user.name}</td>
            <td className="td">{user.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { UserList }
