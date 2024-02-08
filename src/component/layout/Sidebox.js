import "../../css/Sidebox.css";
import { Link } from "react-router-dom";
import {Icon} from "@iconify/react"
import React, { useState } from "react";
const Sidebox = () => {
  const [color ,setColor] =useState("calculator")


  return (
    <div className="vh-100">
      {/* <!-- Sidebar --> */}
      <nav id="sidebar">
        <ul className="list-unstyled p-3 pe-2 ">
          <li className={`${color === "calculator"?"bg-secondary mb-0 m-0 rounded-2 p-1 m-0":"text-danger mb-0 m-0"}`} >
            <Link to="/calculator" className="py-5 pb-0 pt-0 px-4 text-dark text-decoration-none" style={{ cursor: 'pointer' }}onClick={()=>{setColor("calculator")}}>
            <span className={`${color === "calculator"?"fs-5 text-white":"fs-5 text-dark"}`}><Icon icon="mdi:calculator" className="fs-3"/> Calculator <span className="float-end">&#10095;</span></span></Link>
          </li>
          <li className={`${color==="form"?"text-bg-secondary my-2 m-0 mt-2 rounded-2 p-1":"my-2 m-0 mt-2"}`}>
            <Link to="/forms" className= "py-5 pb-0 pt-0 px-4 text-dark text-decoration-none" style={{ cursor: 'pointer' }} onClick={()=>setColor("form")}>
            <span className={`${color==="form"?"text-white fs-5":"text-dark fs-5"}`}><Icon icon="mingcute:report-forms-fill"className="fs-3" /> Forms <span className="float-end">&#10095;</span></span></Link>
          </li>
          <li className={`${color === "dashboard"?"text-bg-secondary my-2 m-0 mt-3 rounded-2 p-1":"my-2 m-0 mt-3"}`}>
          <Link to="/dashboard" className=' py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }} onClick={()=>setColor("dashboard")}>
            <span className={`${color=== "dashboard"?"text-white fs-5":"text-dark fs-5"}`}><Icon icon="ic:baseline-dashboard"className="fs-3" /> Dashboard <span className="float-end">&#10095;</span></span></Link>
          </li>
          <li className={`${color === "datalist"?"text-bg-secondary my-2 m-0 mt-3 rounded-2 p-1":"my-2 m-0 mt-3"}`}>
          <Link to="/data" className=' py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }} onClick={()=>setColor("datalist")}>
            <span className={`${color ==="datalist"?"text-white fs-5":"text-dark fs-5"}`}><Icon icon="majesticons:data"className="fs-3" /> DataList <span className="float-end">&#10095;</span></span></Link>
          </li>
          <li className={`${color === "data_sandy"?"text-bg-secondary my-2 m-0 mt-3 rounded-2 p-1":"my-2 m-0 mt-3"}`}>
          <Link to="/datasandy" className=' py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }} onClick={()=>setColor("data_sandy")}>
            <span className={`${color ==="data_sandy"?"text-white fs-5":"text-dark fs-5"}`}><Icon icon="icon-park-solid:data-one" className="fs-3"/> Data_sandy <span className="float-end">&#10095;</span></span></Link>
          </li>
          <li className={`${color === "setting"?"text-bg-secondary text-white my-2 m-0 mt-3 rounded-2 p-1":"my-2 m-0 mt-3"}`}>
          <Link to="/" className=' py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }} onClick={()=>setColor("setting")}>
            <span className={`${color ==="setting"?"text-white fs-5":"text-dark fs-5"}`}><Icon icon="lets-icons:setting-fill" className="fs-3" /> Settings <span className="float-end">&#10095;</span></span></Link>
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
