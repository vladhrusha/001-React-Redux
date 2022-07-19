import './Main.scss'
import {useState, useEffect} from 'react'
import { fetchData } from '../../scripts/fetchData'
import DOMpurify from 'dompurify'


const UserList = () => {
  const [users, setUsers] = useState<IUsers>()
  const getData = async () => {
    setUsers(await fetchData('users'))
  }
  useEffect(() => {
    getData()
  }, [])

  let cleanUsersHTML = `<div class='main'></div>`
  if (users) {
    cleanUsersHTML = DOMpurify.sanitize(createUsersHTMLString(users))
  }
  return (<div dangerouslySetInnerHTML={{__html: cleanUsersHTML}} />)
}

const createUsersHTMLString = (users : IUsers) => {
  let usersHTML : string
  usersHTML = `
    <div class='main'>
    <table class="table">
    <thead class="thead">
    <tr class="tr">
    <td class="td">Name</td>
    <td class="td">Username</td>
    </tr>
    </thead>
    <tbody>
  `
  if (users) {
    users.forEach((user)  => {
      usersHTML += `
        <tr class="tr">
        <td class="td">${user.name}</td>
        <td class="td">${user.username}</td>
        </tr>
      `
  })
  }
  usersHTML += `</tbody></table></div>`
  return usersHTML

}

interface IUser {
  userId: number,
  id: number,
  name: string,
  username: string
}
interface IUsers extends Array<IUser>{}

export default UserList
