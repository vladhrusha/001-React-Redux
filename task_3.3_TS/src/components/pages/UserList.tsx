import './Main.scss';
import {useState, useEffect} from 'react';
import { fetchData } from '../../scripts/fetchData';
import DOMpurify from 'dompurify'


const UserList = () => {
  const [users, setUsers] = useState([{
      userId: 1,
      id: 1,
      name: "",
      username: ""
    }]);
  
  const getData = async () => {
    setUsers(await fetchData('users'));
  }
  useEffect(() => {
    getData();
  }, []);

  let usersHTML : string;
  usersHTML = `<div class='main'>
              <table class="table">
              <thead>
              <tr class="tr">
              <td class="td">Name</td>
              <td class="td">Username</td>
              </tr>
              </thead>
              <tbody>`;
  if (users) {
    users.forEach((user)  => {
      usersHTML += `
        <tr class="tr">
        <td class="td">${user.name}</td>
        <td class="td">${user.username}</td>
        </tr>
      `;
     });
  }
  usersHTML += `</tbody></table></div>`

  return (<div dangerouslySetInnerHTML={{__html: DOMpurify.sanitize(usersHTML)}} />)
  
};

export default UserList;
