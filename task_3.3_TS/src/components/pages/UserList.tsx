import './Main.scss'
import DOMpurify from 'dompurify'

import {IUsers, IUsersProps} from '../../interfaces/JSONPlaceholderTypes'


const UserList: React.FC<IUsersProps> = ({users} : IUsersProps) => {
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


export default UserList
