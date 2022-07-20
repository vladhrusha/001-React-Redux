import './Main.scss'
import DOMpurify from 'dompurify'

import {ITodos} from '../../interfaces/JSONPlaceholderTypes'



const TodoList: React.FC<ITodos> = (todos : ITodos) => {
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
  for (let i=0; i < todos[199].id; i++) {
      todosHTML += `
        <tr class="tr">
        <td class="td">${todos[i].title}</td>
        <td class=td">${todos[i].completed}</td>
        </tr>
      `
    }
  todosHTML += `</tbody></table></div>`
  return todosHTML

}


export default TodoList
