import './TodoList.scss'
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

  if (todos.length === 0){
    return <>Loading...</>
  }

  let rows :JSX.Element[] = todos.map((todo) =>(
    <tr key={todo.id}className="tr">
      <td className="td">{todo.title}</td>
      <td className="td">{todo.completed}</td>
    </tr>
  ))

  return (
    <table className="table">
      <thead className="thead">
        <tr className="tr">
          <td className="td">Title</td>
          <td className="td completed">Completed</td>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export { TodoList }
