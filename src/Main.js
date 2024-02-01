import React from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import App from './App';
import Calculator from './component/calculator';
import Dashboard from './component/layout/Dashboard';
import Forms from './component/layout/Forms';
import DataList from './component/DataList';

export default function Main() {
  return (
    <>
    <BrowserRouter>
        <Routes>
         <Route path='/' element={<App/>}>
         <Route path='/Calculator' element={<Calculator/>} />
         <Route path='/Forms' element={<Forms/>}/>
         <Route path='/Dashboard' element={<Dashboard/>}/>
         <Route path='/Data' element={<DataList/>}/>
         </Route>
       </Routes>
       </BrowserRouter>
    </>
  )
}

