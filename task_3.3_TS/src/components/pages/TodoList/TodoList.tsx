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

  const onTdKeyUp = (e : React.KeyboardEvent ) => {
    if (e.key === 'Enter') {
      const id = parseInt(e.currentTarget.parentElement!.id) - 1
      const target = e.currentTarget
      let todosVar = todos
      if (target.classList.contains('title')){
        todosVar[id].title = target.innerHTML
      }
      if (target.classList.contains('completed')){
        let targetText = target.innerHTML.toLowerCase()
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
      document.addEventListener('click', (event) => {
          console.log('focused out')
      })
      setTodos(todosVar)
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
            >{todo.title}</td>
            <td
              className="td completed"
              contentEditable="true"
              suppressContentEditableWarning={true}
              onKeyPress={event => {if (event.key === 'Enter') event.preventDefault()}}
              onKeyUp={event => onTdKeyUp(event)}
            >{todo.completed.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )


}



export { TodoList }
