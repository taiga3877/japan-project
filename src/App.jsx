import React from 'react'
import Home from './page/page'
import Navbar from './Components/Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import Footer from './Components/Footer/page'

const App = () => {
  const {t,i18n} = useTranslation();
  const language = localStorage.getItem('')
  const handelChange = (event) =>{
    const selectedLaungage = event.target.value
     i18n.changeLanguage(selectedLaungage)
  }
  
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App