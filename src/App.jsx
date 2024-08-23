import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'



import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
      <Route path='/' element={<Homepage/>} />
     
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App