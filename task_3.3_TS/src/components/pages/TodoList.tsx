import './Main.scss'
import {useState, useEffect} from 'react'
import { fetchData } from '../../scripts/fetchData'
import DOMpurify from 'dompurify'

import {ITodos} from '../../interfaces/JSONPlaceholderTypes'



const TodoList: React.FC<ITodos> = (props: ITodos) => {
  const [todos, setTodos] = useState<ITodos>()
  const getData = async () => {
    setTodos(await fetchData('todos'))
  }
  useEffect(() => {
    getData()
  }, [])



  let cleanTodosHTML = `<div class='main'></div>`
  if (todos) {
    cleanTodosHTML = DOMpurify.sanitize(createTodosHTMLString(todos))
  }
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
  if (todos) {
    todos.forEach((todo)  => {
      todosHTML += `
        <tr class="tr">
        <td class="td">${todo.title}</td>
        <td class=td">${todo.completed}</td>
        </tr>
      `
    })
  }
  todosHTML += `</tbody></table></div>`
  return todosHTML

}


export default TodoList
