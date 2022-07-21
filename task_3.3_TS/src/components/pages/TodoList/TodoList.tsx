import './TodoList.scss'
import {useState, useEffect} from 'react'
import { fetchData } from '../../../scripts/fetchData'
import {Todo} from '../../../models/todo'


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
          <tr key={todo.id}className="tr">
            <td className="td">{todo.title}</td>
            <td className="td">{todo.completed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { TodoList }
