import React from 'react';
import { Data } from "../component/Datas";

function Table() {
  return (
    <div className="table-responsive mt-4 mx-4">
                      <table className="table table-bordered text-center" >
                          <thead className="table-dark">
                              <tr>
                              <th scope="col">S.NO</th>
                              <th scope="col">NAME</th>
                              <th scope="col">COMPANY</th>
                              <th scope="col">EMAIL</th>
                              <th scope="col">PHONE</th>
                              <th scope="col">Button</th>
                              {/* <th scope="col">ADDRESS</th> */}
                              </tr>
                          </thead>
                          <tbody>
                              {Data.map((item, index) => {
                              return (
                                  <>
                                  {index < 10 && (
                                      <tr key={index} >
                                        <td >{index+1}</td>
                                        <td >{item.name}</td>
                                        <td >{item.company}</td>
                                        <td >{item.email}</td>
                                        <td >{item.phone}</td>
                                        <td><button className="px-3 rounded-2">Show</button></td>
                                      {/* <td >{item.address}</td> */}
                                      </tr>
                                  )}
                                  </>
                              );
                              })}
                          </tbody>
                          </table>
                  </div>
  )
}

export default Table