import React, { useState } from "react";
import { Data } from "../component/Datas";
import { useNavigate } from "react-router-dom";
// import Table from "./Table";

const itemperpage = 10
function DataList() {
  //for use search type
  const [searchTerm,setSearchTerm] = useState("")
  //for pagechange code
   const [Currentpage, setCurrentpage] = useState(1);
    //for use navigate
   const navigate=useNavigate();
    //for searching data show
    const filteredData = Data.filter((row) =>
    Object.values(row).some((value) =>
    String(value).toLowerCase().includes(searchTerm.toLowerCase())
  )
);
  //for pagechange code start
   const datalength = filteredData.length;
   const totalpages = Math.ceil(datalength / itemperpage);
   const displaydata = filteredData.slice((Currentpage-1)*itemperpage , Currentpage*itemperpage);
   const startingnumer = (Currentpage -1)*itemperpage +1 ;

   let page = [];
   for (let i = 1; i <= totalpages; i++) {
    page.push(i);
  } 
  //for pagechange code end
  const handleshowdata=()=>{
     navigate("/Datashow")
  }
  // console.log(displaydata);
  
  return (
    <div className="">
      <div className="col-lg-12 col-sm-12 col-md-12 ">
        <div className="">
          <div className="row ">
            <div className="col-lg-12 col-sm-12 col-md-12">
              <div>Total Data : {datalength}</div>
              <div className="text-end my-3 me-5">
                {/* <label className="mx-lg-2 fw-bold fs-5">Search:</label> */}
                <input
                  type="text"
                  placeholder="Search"
                  className="px-lg-4 border-3 fw-bold  rounded-1 py-lg-1 text-end col-sm-3"
                  value={searchTerm}
                  onChange={ (e)=>setSearchTerm(e.target.value)}
                />
                {/* <button className="mx-lg- mx-2 border-3 rounded-2 px-lg-3 py-lg-1 bg-info">
                  Submit
                </button> */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-md-12 ">
                <div className="table-responsive mt-4 mx-lg-4">
                  <table class="table table-striped table-hover text-center">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">S.NO</th>
                        <th scope="col">NAME</th>
                        <th scope="col">COMPANY</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">PHONE</th>
                        <th scope="col">Button</th>
                      </tr>
                    </thead>
                    <tbody>
                    {displaydata.map((item, i) => (
                        <tr key={i}>
                          <th scope="item">{startingnumer + i}</th>
                          <td className='about'>{item.name}</td>
                          <td>{item.company}</td>
                          <td>{item.email}</td>
                          <td className='about'>{item.phone}</td>
                          <td>
                              <button className="px-2 rounded-2" onClick={(e)=>handleshowdata(e)}>
                                Show Details
                              </button>
                          </td>
                </tr>
              ))}   
                    </tbody>
                  </table>
                </div>
                {/* <Table/> */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-md-12 ">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        {page.map((pagenumber) => (
                        <button key={pagenumber} onClick={() => setCurrentpage(pagenumber)} className="mx-1 px-3 py-1 rounded-3 ">{pagenumber}</button>
                      ))}
                   </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default DataList;

// {Data.filter((item)=> {
//     return(
//         // {item._id}
//     )
// })}

{
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
}

 {/* {displaydata.map((item, index) => {
                        return (
                          <>
                            {index < 10 && (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.company}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                  <button className="px-3 rounded-2">
                                    Show
                                  </button>
                                </td>
                              </tr>
                            )}
                          </>
                        );
                      })} */}