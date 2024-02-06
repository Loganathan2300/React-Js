import "../../css/Sidebox.css";
import { Link } from "react-router-dom";
import {Icon} from "@iconify/react"
import React, { useState } from "react";
const Sidebox = () => {
  

  return (
    <div className="vh-100">
      {/* <!-- Sidebar --> */}
      <nav id="sidebar">
        <ul className="list-unstyled p-3 pe-2 ">
          <li className=" mb-0 m-0">
            <Link to="/Calculator" className=' py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
            <span className='fs-5'><Icon icon="mdi:calculator" className="fs-3"/> Calculator <span className="float-end">&#10095;</span></span></Link>
          </li>
          <li className="my-2 m-0 mt-2">
            <Link to="/Forms" className='py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
            <span className='fs-5'><Icon icon="mingcute:report-forms-fill"className="fs-3" /> Forms <span className="float-end">&#10095;</span></span></Link>
          </li>
          <li className="my-2 m-0 mt-3">
          <Link to="/Dashboard" className=' py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
            <span className='fs-5'><Icon icon="ic:baseline-dashboard"className="fs-3" /> Dashboard <span className="float-end">&#10095;</span></span></Link>
          </li>
          <li className="my-2 m-0 mt-3">
          <Link to="/Data" className=' py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
            <span className='fs-5'><Icon icon="majesticons:data"className="fs-3" /> DataList <span className="float-end">&#10095;</span></span></Link>
          </li>
          <li className="my-2 m-0 mt-3">
          <Link to="/" className=' py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
            <span className='fs-5'><Icon icon="lets-icons:setting-fill" className="fs-3" /> Settings <span className="float-end">&#10095;</span></span></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
// const Sidebox =() =>{
//   return(
//     <>
    
//     </>
//   )
// }
export default Sidebox;
