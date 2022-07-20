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

  let rows :JSX.Element[] = []
  if (users && users.length > 0){
    rows = composeRows(users)
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
  return <></>

}


const composeRows = (users : User[]) => {
    let rows :JSX.Element[] = []
    users.forEach((user) => {
      rows.push(
        <tr key={user.id}className="tr">
          <td className="td">{user.name}</td>
          <td className="td">{user.username}</td>
        </tr>
      )
    });
    return rows
}

export { UserList }
