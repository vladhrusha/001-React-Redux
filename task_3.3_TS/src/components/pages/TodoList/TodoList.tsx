import './TodoList.scss'
import React, {useState, useEffect} from 'react'
import { fetchData } from '../../../scripts/fetchData'
import {Todo} from '../../../models/todo'
import { isEmptyOrWhitespaceOnly } from '../../../scripts/utils'


const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  useEffect(() => {
    const getData = async () => {
      setTodos(await fetchData('todos'))
    }
    getData()
  }, [])

  if (todos.length === 0){
    return <>Loading...</>
  }

  const onTdKeyUp = (e : React.KeyboardEvent ) => {
    if (e.key === 'Enter') {
      const id = parseInt(e.currentTarget.parentElement!.id) - 1
      const target = e.currentTarget
      const targetText = target.innerHTML.toLowerCase()
      let todosVar = todos
      if (target.classList.contains('title') && !isEmptyOrWhitespaceOnly(targetText)){
        todosVar[id].title = target.innerHTML
      }
      if (target.classList.contains('title') && isEmptyOrWhitespaceOnly(targetText)){
        target.innerHTML = todos[id].title.toString()
        alert('Empty or Whitespaces Only text is not valid')
      }
      if (target.classList.contains('completed')){
        switch (targetText) {
          case 'false':
            todosVar[id].completed = false
            break
          case 'true':
            todosVar[id].completed = true
            break
          default:
            alert('Only True or False accepted')
            return false
        }
      }
      setTodos(todosVar)
    }

  }
  const onTdBlur = (e: React.FocusEvent) => {
    const target = e.currentTarget
    const id = parseInt(e.currentTarget.parentElement!.id) - 1
    const targetText = target.innerHTML.toLowerCase()
    if (targetText !== 'true' && targetText !== 'false' && target.classList.contains('completed')){
      target.innerHTML = todos[id].completed.toString()
      alert('Only True or False accepted')
    }
    if (target.classList.contains('title') && isEmptyOrWhitespaceOnly(target.innerHTML)){
      target.innerHTML = todos[id].title.toString()
      alert('Empty or Whitespaces Only text is not valid')
    }
  }
  return (
    <table className="table">
      <thead className="thead">
        <tr className="tr">
          <td className="td">Title</td>
          <td className="td completed">Completed</td>
        </tr>
      </thead>
      <tbody>
        {
        todos.map((todo) =>(
          <tr key={todo.id} id={todo.id.toString()}className="tr" >
            <td
              className="td title"
              contentEditable="true"
              suppressContentEditableWarning={true}
              onKeyPress={event => {if (event.key === 'Enter') event.preventDefault()}}
              onKeyUp={event => onTdKeyUp(event)}
              onBlur={event => onTdBlur(event)}
            >{todo.title}</td>
            <td
              className="td completed"
              contentEditable="true"
              suppressContentEditableWarning={true}
              onKeyPress={event => {if (event.key === 'Enter') event.preventDefault()}}
              onKeyUp={event => onTdKeyUp(event)}
              onBlur={event => onTdBlur(event)}
            >{todo.completed.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )

}
export { TodoList }


