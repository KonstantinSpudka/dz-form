import React from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Page from './pages';
// import Login from './components/dz/components/Login'; 
// import SingIn from './components/dz/components/SingIn';
import Header from './components/Header';
import SingInPage from './pages/singInPage';

function App () {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      
      <Route path="/" element={<Page />} />
      <Route path="/singin" element={<SingInPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
