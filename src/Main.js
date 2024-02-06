import React from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import App from './App';
import Calculator from './component/calculator';
import Dashboard from './component/layout/Dashboard';
import Forms from './component/layout/Forms';
import DataList from './component/DataList';
import Datashow from './component/Datashow';
export default function Main() {
  return (
    <>
    <BrowserRouter>
        <Routes>
         <Route path='/' element={<App/>}>
         <Route path='/calculator' element={<Calculator/>} />
         <Route path='/forms' element={<Forms/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/data' element={<DataList/>}/>
         <Route path='/datashow' element={<Datashow/>}/>
         </Route>
       </Routes>
       </BrowserRouter>
    </>
  )
}

