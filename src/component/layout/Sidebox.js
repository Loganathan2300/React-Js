import "../../css/Sidebox.css";
import { Link } from "react-router-dom";
import {Icon} from "@iconify/react"
const Sidebox = () => {
  return (
    <div className="vh-100">
      {/* <!-- Sidebar --> */}
      <nav id="sidebar">
        <ul className="list-unstyled ">
          <li className="my-3 mb-0 m-0">
            <Link to="/Calculator" className=' py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
            <span className='fs-5'>Calculator </span></Link>
          </li>
          <li className="my-2 m-0">
            <Link to="/Forms" className='py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
            <span className='fs-5'>Forms</span></Link>
          </li>
          <li className="my-2 m-0">
          <Link to="/Dashboard" className=' py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
            <span className='fs-5'>Dashboard</span></Link>
          </li>
          <li className="my-2 m-0">
          <Link to="/Data" className=' py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
            <span className='fs-5'>DataList</span></Link>
          </li>
          <li className="my-2 m-0">
          <Link to="/" className=' py-5 pb-0 pt-0 px-4 text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
            <span className='fs-5'>Settings</span></Link>
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
