import { Outlet } from 'react-router-dom';
import './App.css'
import HomeItem from '../components/HomeItem'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'

function App() {
  return (
    <>
      <Header />
      <main className=' bg-no-repeat bg-cover'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
