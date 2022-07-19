import { useEffect, useState } from 'react'
import './App.scss'
import Navigation from './components/Navigation/Navigation'
import {fetchData} from './scripts/fetchData'
function App() {
  return (
    <div className='app'>
      <Navigation/>
    </div>
  )
}

export default App
