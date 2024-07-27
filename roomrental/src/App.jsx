import { useState } from 'react'
import './App.css'
import Header from './Components/Common/Heading/Header'
import Nav from './Components/Common/Heading/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
  <Nav/>
    </>
  )
}

export default App
