import React,{useState} from 'react'
import TableData from './TableData'
import { Data } from './Datas'
import Datashow from './Datashow'
import { useNavigate } from 'react-router-dom'

const DataList = () => {
  const [seletedRow,setSelectRow] = useState(null);
  const navigate = useNavigate();
  const dataColum = ["name","age","email","company","phone"]
  //page navigate start
  const handleShowButton = (id) => {
    setSelectRow(Data.find((row) => row._id === id));
    navigate(`/data/${id}`);
  };
  //back to navicate 
  const handleBackButton =() =>{
    setSelectRow(null);
    navigate(`/data`)
  };
  if (seletedRow){
    return(
      <Datashow seletedRow = {seletedRow} handleBackButton={handleBackButton}/>
    )
  };
  // //page navigate end
  return (
    <div className="m-lg-5">
        <div className="card py-lg-5 pb-lg-0 pt-lg-4 py-sm-3">
          <TableData tableHeader={dataColum} tableDatas={Data} showButton={true} handleShowButton={handleShowButton} button={true} No={true}/>
        </div>
    </div>
  )
}

export default DataList





// import React, { useState } from "react";
// import { Data } from "../component/Datas";
// import { useNavigate } from "react-router-dom";
// import Datashow from "./Datashow";
// //  import { Datashow } from "./Datashow";

// const itemperpage = 10;
// function DataList() {
//   //for use search type
//   const [searchTerm, setSearchTerm] = useState("");
//   //for pagechange code
//   const [Currentpage, setCurrentpage] = useState(1);
//   // //for use navigate
//   const navigate = useNavigate();
//   const [seletedRow,setSelectRow] = useState(null);
//   //for searching data show
//   const filteredData = Data.filter((row) =>
//     Object.values(row).some((value) =>
//       String(value).toLowerCase().includes(searchTerm.toLowerCase())
//     )
    
//   );
//   //for pagechange code start
//   const datalength = filteredData.length;
//   const totalpages = Math.ceil(datalength / itemperpage);
//   //const totalpages = 30;
//   //visuvalPage = 3;
//   const displaydata = filteredData.slice((Currentpage - 1) * itemperpage, Currentpage * itemperpage);
//   const startingnumer = (Currentpage - 1) * itemperpage + 1;

//   let page = [];
//   for (let i = 1; i <= totalpages; i++) {
//     page.push(i);
//   }
//   //for pagechange code end
//   //page navigate start
//   const handleshowdata = (id) => {
//     setSelectRow(Data.find((row) => row._id === id));
//     navigate(`/data/${id}`);
//   };
//   //back to navicate 
//   const handleBackButton =() =>{
//     setSelectRow(null);
//     navigate(`/data`)
//   };
//   if (seletedRow){
//     return(
//       <Datashow seletedRow = {seletedRow} handleBackButton={handleBackButton}/>
//     )
//   };
//   // //page navigate end
//   return (
//     <div className="">
//       <div className="col-lg-12 col-sm-12 col-md-12 ">
//           <div className="row ">
//             <div className="col-lg-12 col-sm-12 col-md-12">
//               <div className="row my-2">
//                 <div className="col-6">
//                       <div className="fw-bold mx-lg-4 fs-5">Total Data : {datalength}</div>
//                 </div>
//                 <div className="col-6">
//                     <div className="text-end me-5">
//                       <input type="text" placeholder="Search" className="px-lg-4 py-lg-1 border-3 fw-bold rounded-1" 
//                       value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
//                     </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-12 col-sm-12 col-md-12 ">
//                 <div className="table-responsive mt-4 mx-lg-4 rounded-3">
//                   <table class="table table-striped table-hover text-center">
//                     <thead className="table-secondary">
//                       <tr>
//                         <th scope="col">S.NO</th>
//                         <th scope="col">NAME</th>
//                         <th scope="col">COMPANY</th>
//                         <th scope="col">EMAIL</th>
//                         <th scope="col">PHONE</th>
//                         <th scope="col">Button</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {displaydata.map((item, i) => (
//                         <tr key={i}>
//                           <th scope="item">{startingnumer + i}</th>
//                           <td>{item.name}</td>
//                           <td>{item.company}</td>
//                           <td>{item.email}</td>
//                           <td>{item.phone}</td>
//                           <td>
//                             <button className="px-2 rounded-2 text-bg-secondary text-white " onClick={() => handleshowdata(item._id)}> Show Details </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-12 col-sm-12 col-md-12 ">
//                 <nav aria-label="Page navigation example">
//                   <ul class="pagination justify-content-center">
//                     {page.map((pagenumber) => (
//                       <button
//                         key={pagenumber} onClick={() => setCurrentpage(pagenumber)} className="mx-1 px-3 py-1 rounded-3 ">{pagenumber}</button>
//                     ))}
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
//   );
// }

// export default DataList;


  /* <div className="row my-lg-4 mx-lg-4 pe-lg-5 ">
              <div className="col-lg-12 col-sm-12 col-md-12">
                <div className="">
                  <div className="">
                    <table className="table table-bordered w-100" >
                      <thead className="table-dark text-center">
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">S.No</th>
                          <th scope="col">NAME</th>
                          <th scope="col">GENDER</th>
                          <th scope="col">COMPANY</th>
                          <th scope="col">EMAIL</th>
                          <th scope="col">PHONE</th>
                          <th scope="col">ADDRESS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Data.map((item, index) => {
                          return (
                            <>
                              {index < 10 && (
                                <tr key={index} >
                                  <td >{item._id}</td>
                                   <td>{item.age}</td>
                                  <td >{item.name}</td>
                                   <td>{item.gender}</td>
                                  <td >{item.company}</td>
                                  <td >{item.email}</td>
                                  <td >{item.phone}</td>
                                  <td >{item.address}</td>
                                </tr>
                            
                              )}
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> */


