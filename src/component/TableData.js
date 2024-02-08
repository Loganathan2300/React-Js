// import React,{useState} from 'react'
// import { useNavigate } from "react-router-dom";
// import { Data } from './Datas';
// import Datashow from './Datashow';

// const TableData = ({displaydata,startingnumer}) => {
//       //for use navigate
//   const navigate = useNavigate();
//   const [seletedRow,setSelectRow] = useState(null);
//     //page navigate start
//   const handleshowdata = (id) => {
//     setSelectRow(Data.find((row) => row._id === id));
//     navigate(`/datalist/${id}`);
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
//   //page navigate end
//   return (
//     <div className="row">
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
//                           <th scope="item">{startingnumer+i}</th>
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
//   )
// }

// export default TableData