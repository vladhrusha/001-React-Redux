import './Main.scss'
import DOMpurify from 'dompurify'

import {useState, useEffect} from 'react'
import { fetchData } from '../../scripts/fetchData'
import {User} from './user'

const UserList = () => {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setUsers(await fetchData('users'))
  }

  let cleanUsersHTML = `<div class='main'></div>`

  if (users){
    cleanUsersHTML = DOMpurify.sanitize(createUsersHTMLString(users))
  }

  return (<div dangerouslySetInnerHTML={{__html: cleanUsersHTML}} />)
}

const createUsersHTMLString = (users : User[]) => {
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

  users.forEach(user => {
      usersHTML += `
      <tr class="tr">
      <td class="td">${user.name}</td>
      <td class="td">${user.username}</td>
      </tr>
    `
  });

  usersHTML += `</tbody></table></div>`
  return usersHTML

}


export { UserList }
