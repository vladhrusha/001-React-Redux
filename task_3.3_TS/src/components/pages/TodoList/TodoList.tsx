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

  let rows :JSX.Element[] = []
  if (todos && todos.length > 0){
    rows = composeRows(todos)
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
  return <>Loading...</>

}

const composeRows = (todos : Todo[]) => {
    let rows :JSX.Element[] = []
    todos.forEach((todo) => {
      rows.push(
        <tr key={todo.id}className="tr">
          <td className="td">{todo.title}</td>
          <td className="td">{todo.completed.toString()}</td>
        </tr>
      )
    });
    return rows
}

export { TodoList }
