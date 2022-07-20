import './Main.scss'
import DOMpurify from 'dompurify'

import {ITodos, ITodosProps} from '../../interfaces/JSONPlaceholderTypes'



const TodoList: React.FC<ITodosProps> = ({todos} : ITodosProps) => {
  let cleanTodosHTML = `<div class='main'></div>`

  cleanTodosHTML = DOMpurify.sanitize(createTodosHTMLString(todos))

  return (<div dangerouslySetInnerHTML={{__html: cleanTodosHTML}} />)
}

const createTodosHTMLString = (todos : ITodos) => {
  let todosHTML : string
  todosHTML = `<div class='main'>
    <table class="table">
    <thead class="thead">
    <tr class="tr">
    <td class="td">Task</td>
    <td class="td completed">Completed</td>
    </tr>
    </thead>
    <tbody>
  `
  todos.forEach(todo => {
      todosHTML += `
      <tr class="tr">
      <td class="td">${todo.title}</td>
      <td class="td">${todo.completed}</td>
      </tr>
    `
  });

  todosHTML += `</tbody></table></div>`
  return todosHTML

}


export default TodoList
