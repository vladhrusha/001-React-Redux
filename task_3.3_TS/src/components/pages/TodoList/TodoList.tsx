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


  const onTdKeyUp = (e : React.KeyboardEvent ) => {
    if (e.key !== 'Enter'){
      return;
    }
    const id = parseInt(e.currentTarget.parentElement!.id) - 1
    const target = e.currentTarget
    const targetText = target.innerHTML
    if (target.classList.contains('title') && !isEmptyOrWhitespaceOnly(targetText)){
      todos[id].title = targetText
    }
    if (target.classList.contains('title') && isEmptyOrWhitespaceOnly(targetText)){
      alert('Empty or Whitespaces Only text is not valid')
    }
  }
  const onTitleTdBlur = (e: React.FocusEvent) => {
  }
  const onClickDelete = (e: React.MouseEvent) => {
    const rows = e.currentTarget.parentElement!.parentElement?.querySelectorAll('.tr')
    rows!.forEach(row => {
      row.id = (parseInt(row.id) - 1).toString()
    });
    e.currentTarget.parentElement!.remove()
    const id = parseInt(e.currentTarget.parentElement!.id) - 1
    let todosVar = todos
    todosVar.splice(id, 1)
    todosVar.forEach((todoVar, index) => {
      todoVar.id = index + 1
    })
    setTodos(todosVar)
  }
  const onCheckBoxClick = (e : React.MouseEvent) => {
    const id = parseInt(e.currentTarget.parentElement!.parentElement!.id) - 1
    const checkbox = e.currentTarget as HTMLInputElement
    todos[id].completed = checkbox.checked
  }

  if (todos.length === 0){
    return <>Loading...</>
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
              onBlur={event => onTitleTdBlur(event)}
            >{todo.title}</td>
            <td
              className="td completed"
            >
              <input
                type="checkbox"
                onClick={onCheckBoxClick}
                className="checkbox"
                defaultChecked={todo.completed}
                >
              </input>
            </td>
            <td className="td deleted" onClick={event => onClickDelete(event)}>
              Delete
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )

}
export { TodoList }


