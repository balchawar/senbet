import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Abalat from './pages/Abalat'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
        <Routes>
          <Route path="/"element={<Dashboard/>}/>
          <Route path="/dashboard"element={<Dashboard/>}/>
          <Route path='/abalat'element={<Abalat/>}/>
        </Routes> 
    </Sidebar>
    </BrowserRouter>
  )
}

export default App
