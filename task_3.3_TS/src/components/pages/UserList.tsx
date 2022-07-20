import './Main.scss'
import DOMpurify from 'dompurify'

import {IUsers} from '../../interfaces/JSONPlaceholderTypes'


const UserList: React.FC<IUsers> = (users : IUsers) => {
  let cleanUsersHTML = `<div class='main'></div>`

  cleanUsersHTML = DOMpurify.sanitize(createUsersHTMLString(users))

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
  for (let i=0; i < users[9].id; i++) {
      usersHTML += `
        <tr class="tr">
        <td class="td">${users[i].name}</td>
        <td class="td">${users[i].username}</td>
        </tr>
      `
  }
  usersHTML += `</tbody></table></div>`
  return usersHTML

}


export default UserList
