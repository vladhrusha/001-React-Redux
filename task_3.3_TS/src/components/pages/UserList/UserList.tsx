import './UserList.scss'

import {useState, useEffect} from 'react'
import { fetchData } from '../../../scripts/fetchData'
import {User} from '../../../models/user'

const UserList = () => {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setUsers(await fetchData('users'))
  }

  if (users.length === 0){
  return <>Loading...</>
  }

  let rows :JSX.Element[] = users.map((user) =>(
    <tr key={user.id}className="tr">
      <td className="td">{user.name}</td>
      <td className="td">{user.username}</td>
    </tr>
  ))

  return (
    <table className="table">
      <thead className="thead">
        <tr className="tr">
          <td className="td">Name</td>
          <td className="td">Username</td>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export { UserList }
