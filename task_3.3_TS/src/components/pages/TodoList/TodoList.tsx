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


  const onClickDelete = (e: React.MouseEvent, id : number) => {
    setTodos([...todos.filter((todo) => id !==  todo.id)])
  }
  const onCheckBoxClick = (e : React.MouseEvent) => {
    const id = parseInt(e.currentTarget.parentElement!.parentElement!.id) - 1
    const checkbox = e.currentTarget as HTMLInputElement
    todos[id].completed = checkbox.checked
  }

  const onTitleClick = (e : React.MouseEvent, id : number) => {
    const input = document.querySelector('.todo__input') as HTMLInputElement
    const selectedTodo = [...todos.filter((todo) => id === todo.id)][0]
    setInputValue(selectedTodo.title)
    setIndex(selectedTodo.id)
    input.focus()
  }
  const onInputBlur = (e :React.FocusEvent) => {
    setInputValue('')
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
    todos.forEach(todo => {
      if (todo.id === index){
        todo.title = inputValue
      }
    });
    setTodos([...todos])
    setInputValue("")
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
      onClick={e => e.currentTarget.blur()}

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
              onClick={event => onTitleClick(event, todo.id)}
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
            <td className="td deleted" onClick={event => onClickDelete(event, todo.id)}>
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
