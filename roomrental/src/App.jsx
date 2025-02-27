import { useState } from 'react'
import './App.css'
import Header from './Components/Common/Heading/Header'
import Nav from './Components/Common/Heading/Nav'
import Homebanner from './Components/Homebanner/Homebanner'
import Footer from './Components/Common/Footer/Footer'
import Footerlast from './Components/Common/Footer/Footerlast'
import Blog from './Components/Blog/Blog';
import Aboutus from './Components/Aboutus/Aboutus';
import Newsletter from './Components/Common/Newsletter/Newsletter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
  <Nav/>
  <Homebanner/>
  <Aboutus/>
  <Blog/>
  <Newsletter/>
  <Footer/>
  <Footerlast/>
    </>
  )
}

export default App
