
import './App.css'
import Header from './Components/Header'
import Movies from './Components/Movies'
import Navbar from './Components/Navbar'

function App() {
 

  return (
    <>

      <div className='text-gray-100 bg-[#040714]'>
      <Navbar></Navbar>
      <Header></Header>
      <Movies></Movies>
      </div>
 
    </>
  )
}

export default App
