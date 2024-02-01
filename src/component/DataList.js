import React from "react";
import { Data } from "../component/Datas";
function DataList() {
  return (
    <div className="">
      <div className="col-lg-12 col-sm-12 col-md-12 ">
        <div className="">
          <div className="row ">
            <div className="col-lg-12 col-sm-12 col-md-12">
              <div className="text-end my-3 me-5">
                {/* <label className="mx-lg-2 fw-bold fs-5">Search:</label> */}
                <input
                  type="text"
                  placeholder="Search"
                  className="px-lg-4 border-3 fw-bold  rounded-1 py-lg-1 text-end col-sm-3"
                />
                <button className="mx-lg- mx-2 border-3 rounded-2 px-lg-3 py-lg-1 bg-info">
                  Submit
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-md-12 ">
                  <div className="table-responsive mt-4 mx-4">
                      <table className="table table-bordered" >
                          <thead className="table-dark text-center">
                              <tr>
                              <th scope="col">id</th>
                              <th scope="col">NAME</th>
                              <th scope="col">COMPANY</th>
                              <th scope="col">EMAIL</th>
                              <th scope="col">PHONE</th>
                              {/* <th scope="col">ADDRESS</th> */}
                              </tr>
                          </thead>
                          <tbody>
                              {Data.map((item, index) => {
                              return (
                                  <>
                                  {index < 10 && (
                                      <tr key={index} >
                                      <td >{item._id}</td>
                                      <td >{item.name}</td>
                                      <td >{item.company}</td>
                                      <td >{item.email}</td>
                                      <td >{item.phone}</td>
                                      {/* <td >{item.address}</td> */}
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

{/* <div className="row my-lg-4 mx-lg-4 pe-lg-5 ">
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
            </div> */}