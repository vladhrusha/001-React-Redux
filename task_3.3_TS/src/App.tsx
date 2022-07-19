import { useEffect, useState } from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation'
import {fetchData} from './scripts/fetchData';
function App() {
  const [todos, setTodos] = useState(null)
  const [users, setUsers] = useState(null);



  useEffect(() => {
    const getData = async () => {
      setTodos(await fetchData('todos'));
      setUsers(await fetchData('users'));
    }
    getData();
  }, []);

  return (
    <div className='app'>
      <Navigation/>
    </div>
  );
}





export default App;
