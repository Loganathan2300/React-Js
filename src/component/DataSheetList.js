import React,{useState} from "react";
import { Datasheet } from "../component/Datasheet";
const itemPage = 2

export const DataSheetList = () => {
  const [pageChange,setPageChange]=useState(1)

const [searchTerms,setSearchTeams]= useState("")

const filterData = Datasheet.filter((row) =>
  Object.values(row).some((value) =>
  String(value).toLowerCase().includes(searchTerms.toLowerCase())
  )
);

const pageLength = filterData.length;
const totalPages = Math.ceil(pageLength / itemPage);
const dataShowDetail = filterData.slice((pageChange -1) * itemPage,pageChange * itemPage);
const startingNumnber = (pageChange -1) * itemPage +1;

let page = [];
for (let i = 1; i <= totalPages; i++) {
  page.push(i);
}
  return (
    <div className="col-lg-12 col-sm-12 col-md-12 ">
    <div className="">
      <div className="row ">
        <div className="col-lg-12 col-sm-12 col-md-12">
          {/* <div>Total Data : {datalength}</div> */}
          <div className="text-end my-3 me-5">
            {/* <label className="mx-lg-2 fw-bold fs-5">Search:</label> */}
            <input
              type="text" placeholder="Search" className="px-lg-4 border-3 fw-bold rounded-1 py-lg-1 col-sm-3"
              value={searchTerms}
              onChange={(e) => setSearchTeams(e.target.value)}
            />
          </div>
        </div>
        <div className=" w-100">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12 ">
              <div className="table-responsive mt-4 mx-lg-4 rounded-3">
                <table class="table table-striped table-hover text-center">
                  <thead className="table-secondary">
                    <tr>
                      <th scope="col">S.NO</th>
                      <th scope="col">NAME</th>
                      <th scope="col">USERNAME</th>
                      <th scope="col">EMAIL</th>
                      <th scope="col">STREET</th>
                      <th scope="col">SUITE</th>
                      <th scope="col">CITY</th>
                      <th scope="col">ZIPCODE</th>
                      <th scope="col">LATITUDE</th>
                      <th scope="col">ING</th>
                      <th scope="col">PHONE</th>
                      <th scope="col">WEBSITE</th>
                      <th scope="col">COMPANY NAME</th>
                      <th scope="col">CATCHPHRASE</th>
                      <th scope="col">BS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataShowDetail.map((item,i)=>(
                      <tr key={i}>
                        <td>{startingNumnber+i}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.address.street}</td>
                        <td>{item.address.suite}</td>
                        <td>{item.address.city}</td>
                        <td>{item.address.zipcode}</td>
                        <td>{item.address.geo.lat}</td>
                        <td>{item.address.geo.lng}</td>
                        <td>{item.phone}</td>
                        <td>{item.website}</td>
                        <td>{item.company.name}</td>
                        <td>{item.company.catchPhrase}</td>
                        <td>{item.company.bs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12 ">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                {page.map((pagenumber) => (
                  <button
                    key={pagenumber}
                    onClick={() => setPageChange(pagenumber)}
                    className="mx-1 px-3 py-1 rounded-3 " >
                    {pagenumber}
                  </button>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}



// function DataSheetList() {
  
//   const [pageChange,setPageChange]=useState(1)

//   const [searchTerms,setSearchTeams]= useState("")

//   const filterData = Datasheet.filter((row) =>
//     Object.values(row).some((value) =>
//     String(value).toLowerCase().includes(searchTerms.toLowerCase())
//     )
//   );

//   const pageLength = filterData.length;
//   const totalPages = Math.ceil(pageLength / itemPage);
//   const dataShowDetail = filterData.slice((pageChange -1) * itemPage,pageChange * itemPage);
//   const startingNumnber = (pageChange -1) * itemPage +1;
  
//   let page = [];
//   for (let i = 1; i <= totalPages; i++) {
//     page.push(i);
//   }

//   return (
//     <div className="col-lg-12 col-sm-12 col-md-12 ">
//       <div className="">
//         <div className="row ">
//           <div className="col-lg-12 col-sm-12 col-md-12">
//             {/* <div>Total Data : {datalength}</div> */}
//             <div className="text-end my-3 me-5">
//               {/* <label className="mx-lg-2 fw-bold fs-5">Search:</label> */}
//               <input
//                 type="text" placeholder="Search" className="px-lg-4 border-3 fw-bold rounded-1 py-lg-1 text-end col-sm-3"
//                 value={searchTerms}
//                 onChange={(e) => setSearchTeams(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className=" w-100">
//             <div className="row">
//               <div className="col-lg-12 col-sm-12 col-md-12 ">
//                 <div className="table-responsive mt-4 mx-lg-4 rounded-3">
//                   <table class="table table-striped table-hover text-center">
//                     <thead className="table-secondary">
//                       <tr>
//                         <th scope="col">S.NO</th>
//                         <th scope="col">NAME</th>
//                         <th scope="col">USERNAME</th>
//                         <th scope="col">EMAIL</th>
//                         <th scope="col">STREET</th>
//                         <th scope="col">SUITE</th>
//                         <th scope="col">CITY</th>
//                         <th scope="col">ZIPCODE</th>
//                         <th scope="col">LATITUDE</th>
//                         <th scope="col">ING</th>
//                         <th scope="col">PHONE</th>
//                         <th scope="col">WEBSITE</th>
//                         <th scope="col">COMPANY NAME</th>
//                         <th scope="col">CATCHPHRASE</th>
//                         <th scope="col">BS</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {dataShowDetail.map((item,i)=>(
//                         <tr key={i}>
//                           <td>{startingNumnber+i}</td>
//                           <td>{item.name}</td>
//                           <td>{item.email}</td>
//                           <td>{item.phone}</td>
//                           <td>{item.address.street}</td>
//                           <td>{item.address.suite}</td>
//                           <td>{item.address.city}</td>
//                           <td>{item.address.zipcode}</td>
//                           <td>{item.address.geo.lat}</td>
//                           <td>{item.address.geo.lng}</td>
//                           <td>{item.phone}</td>
//                           <td>{item.website}</td>
//                           <td>{item.company.name}</td>
//                           <td>{item.company.catchPhrase}</td>
//                           <td>{item.company.bs}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-12 col-sm-12 col-md-12 ">
//               <nav aria-label="Page navigation example">
//                 <ul class="pagination justify-content-center">
//                   {page.map((pagenumber) => (
//                     <button
//                       key={pagenumber}
//                       onClick={() => setPageChange(pagenumber)}
//                       className="mx-1 px-3 py-1 rounded-3 " >
//                       {pagenumber}
//                     </button>
//                   ))}
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default DataSheetList;

{/* {Datasheet.map((item, i) => (
  <tr key={i}>
  <th scope="item">{i + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td>
                                <button className="px-2 rounded-2" onClick={(e)=>handleshowdata(e)}>
                                    Show Details
                                </button>
                            </td>
                        </tr>
                        ))} */}
  {/* <div>
    <h1>User List</h1>
    <ul>
      {Datasheet.map((user,id) => (
        <li key={user.id}>
          <p>Name: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          
          <h3>Address</h3>
          <ul>
            <li>Street: {user.address.street}</li>
            <li>Suite: {user.address.suite}</li>
            <li>City: {user.address.city}</li>
            <li>Zipcode: {user.address.zipcode}</li>
            <li>Latitude: {user.address.geo.lat}</li>
            <li>Longitude: {user.address.geo.lng}</li>
          </ul>
         
          <h3>Company</h3>
          <ul>
          <li>PHONE: {user.phone}</li>
            <li>WEBSITE: {user.website}</li>
            <li> Catch Phrase: {user.company.catchPhrase}</li>
            <li>BS: {user.company.bs}</li>
          </ul>
        </li>
      ))}
    </ul>
  </div> */}
  
 