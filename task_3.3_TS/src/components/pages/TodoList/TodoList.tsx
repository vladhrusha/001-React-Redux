import '../Main.scss'
import DOMpurify from 'dompurify'

import {useState, useEffect} from 'react'
import { fetchData } from '../../../scripts/fetchData'
import {Todo} from '../../../models/todo'


const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setTodos(await fetchData('todos'))
  }

  let cleanPostsHTML = `<div class='main'></div>`

  if (todos){
    cleanPostsHTML = DOMpurify.sanitize(createTodosHTMLString(todos))
  }

  return (<div dangerouslySetInnerHTML={{__html: cleanPostsHTML}} />)
}

const createTodosHTMLString = (todos : Todo[]) => {
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


export { TodoList } 
