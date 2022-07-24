import './TodoList.scss'
import React, {useState, useEffect} from 'react'
import { fetchData } from '../../../scripts/fetchData'
import {Todo} from '../../../models/todo'
import { isEmptyOrWhitespaceOnly } from '../../../scripts/utils'


const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const getData = async () => {
      setTodos(await fetchData('todos'))
    }
    getData()
  }, [])


  const onClickDelete = (e: React.MouseEvent) => {
    const id = parseInt(e.currentTarget.parentElement!.id) - 1
    //delete from DOM
    e.currentTarget.parentElement!.remove()
    const table = document.querySelector('.table')
    const rows = table!.querySelectorAll('.tr')
    rows!.forEach((row, i) => {
      row.id = i.toString()
    });

    //delete from Data

    // setTodos([...todos.filter((todo) => todo.id !==id)])

    let todosVar = todos
    todosVar.splice(id, 1)
    todosVar.forEach((todoVar, indexx) => {
      todoVar.id = indexx + 1
    })
    setTodos(todosVar)
    console.log(todos)
    console.log(rows.length - 1)

  }
  const onCheckBoxClick = (e : React.MouseEvent) => {
    const id = parseInt(e.currentTarget.parentElement!.parentElement!.id) - 1
    const checkbox = e.currentTarget as HTMLInputElement
    todos[id].completed = checkbox.checked
  }

  //if N>1 items were deleted from data since last onTableClick,
  //deletes N items from DOM repeatedly
  // both setInput value and setIndex do that
  const onTitleClick = (e : React.MouseEvent) => {
    const input = document.querySelector('.todo__input') as HTMLInputElement
    const id = parseInt(e.currentTarget.parentElement!.id) - 1
    // setInputValue(todos[id].title)
    setInputValue('kek')
    console.log(todos[id].title)

    console.log(id)
    // setIndex(id)
    const table = document.querySelector('.table')
    const rows = table!.querySelectorAll('.tr')
    console.log(rows.length  - 1)
    input.focus()
  }
  const onInputBlur = (e :React.FocusEvent) => {
    setInputValue('')
    setIndex(0)
  }
  const onKeyUp = ( e : React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter'){
      return;
    }
    if (isEmptyOrWhitespaceOnly(inputValue)){
      alert('Empty or Whitespaces Only text is not valid')
      return
    }
    handleSubmit()
  }

  const handleSubmit = () => {
    let todosVar = todos
    todosVar[index].title = inputValue
    setTodos(todosVar)
    setInputValue("")
    setIndex(0)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  if (todos.length === 0){
    return <>Loading...</>
  }
  return (
    <div className="todo">
    <input
      className="todo__input"
      value={inputValue}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onBlur={onInputBlur}

    >
    </input>
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
              onClick={event => onTitleClick(event)}
            >{todo.title}
            </td>
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
    </div>
  )

}
export { TodoList }
