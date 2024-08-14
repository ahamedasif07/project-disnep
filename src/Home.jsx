
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Movies from './Components/Movies'
import Navbar from './Components/Navbar'

function Home() {
 

  return (
    <>

      <div className='text-gray-100 bg-[#090a0f]'>
      <Navbar></Navbar>
      <Header></Header>
      <Movies></Movies>
      <Footer></Footer>
      </div>
 
    </>
  )
}

export default Home
