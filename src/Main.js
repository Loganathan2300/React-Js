import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Calculator from './component/calculator';
import Dashboard from './component/layout/Dashboard';
import Forms from './component/layout/Forms';
import DataList from './component/DataList';
import DataSheetList from './component/DataSheetList';
import TableData from './component/TableData';
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
         <Route path='/data/:id' element={<DataList/>}/>
         <Route path='/datasandy' element={<DataSheetList/>}/>
         <Route path='/table' element={<TableData/>}/>
         </Route>
       </Routes>
       </BrowserRouter>
    </>
  )
}

