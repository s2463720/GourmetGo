import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from "react-router-dom"
import Add from './pages/add/add';
import List from './pages/list/list';
import Orders from './pages/orders/orders';
const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes> 
      </div>
      
    </div>
  )
}

export default App
