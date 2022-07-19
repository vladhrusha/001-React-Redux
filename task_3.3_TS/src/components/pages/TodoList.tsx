import './Main.scss';
import {useState, useEffect} from 'react';
import { fetchData } from '../../scripts/fetchData';
import DOMpurify from 'dompurify'


const TodoList = () => {
  const [todoItems, setTodoItems] = useState([{
      userId: 1,
      id: 1,
      title: "",
      completed: false
    }]);
  
  const getData = async () => {
    setTodoItems(await fetchData('todos'));
  }
  useEffect(() => {
    getData();
  }, []);

  let todosHTML : string;
  todosHTML = `<div class='main'>
              <table class="table">
              <thead>
              <tr class="tr">
              <td class="td">Task</td>
              <td class="td completed">Completed</td>
              </tr>
              </thead>
              <tbody>`;
  if (todoItems) {
    todoItems.forEach((todoItem)  => {
      todosHTML += `
        <tr class="tr">
        <td class="td">${todoItem.title}</td>
        <td class=td">${todoItem.completed}</td>
        </tr>
      `;
     });
  }
  todosHTML += `</tbody></table></div>`

  return (<div dangerouslySetInnerHTML={{__html: DOMpurify.sanitize(todosHTML)}} />)
  
};


export default TodoList;
