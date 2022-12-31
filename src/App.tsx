import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'
import Footer from './common/components/Footer/Footer'
import Header from './common/components/Header/Header'
import Router from './common/components/Router/Router'

function App () {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className='app'>
      <Header />
      <Router />
      <Footer />
    </div>
  )
}
export default App
