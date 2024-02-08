import React, { useState } from "react";
//mport "../../css/Body.css";
// import "bootstrap/dist/css/bootstrap.min.css";
function Forms() {
  return (
<>
<div className="content mx-4 my-lg-3 h-100">
    <div className="row">
            <div className="col-sm-12 col-lg-8 col-md-12 col-xxl-8 border border-2 border-secoundery rounded-4 bg-white p-2 p-lg-3">
                <div className="fs-3 fw-medium mt-0 ">
                    <span className=" text-info"></span>
                    <span className=" mx-1">Form Task</span>
                </div>
                <div className="row my-3 mb-0 mt-0 mt-lg-2">
                    <div className="col-sm-12 col-lg-6 col-md-12 col-xl-6 ">
                        <label for="" className=" fw-medium  mx-3">Email address</label>
                        <input type="text"  className="rounded-4 border-2 border-secoundery form-control fw-medium mx-lg-2 mx-1" placeholder="Email address" aria-label="Email address"/>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-md-12 col-xl-6 ">
                        <label for="" className="fw-medium mx-3">Passowrd</label>
                        <input type="password" className="rounded-4 border-2 border-secoundery form-control fw-medium mx-lg-2 mx-1" placeholder="Passowrd" aria-label="password"/>
                    </div>
                </div>
                <div className="row my-lg-2">
                    <div className="col-sm-12 col-lg-6 col-md-12 col-xl-6">
                        <label for="" className=" fw-medium mx-3">First name</label>
                        <input type="text" className="rounded-4 border-2 border-secoundery form-control fw-medium mx-lg-2 mx-1" placeholder="First name" aria-label="Email address"/>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-md-12 col-xl-6">
                        <label for="" className="fw-medium mx-3">Last name</label>
                        <input type="text" className="rounded-4 border-2 border-secoundery form-control fw-medium mx-lg-2 mx-1" placeholder="Last name" aria-label="password"/>
                    </div>
                </div>
                <div className="row mx-1 my-3 my-lg-4 mb-lg-0 mb-0 mt-1">
                    <div className=" col-sm-12 col-lg-8 col-md-12 col-xl-8">
                        <p className="mb-0">By Creating account, you agree to the <a href="#">Terms And Condtions</a> set
                            out by this site, including our <a href="#">Cookie Use</a></p>
                    </div>
                    <div className="col-sm-12 col-lg-4 col-md-12 col-xl-3">
                        <div className="mx-5 mt-0">
                            <button type="button" className=" btn bg-info "> Continue </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>   
</div>
</>
  );
}

{/* function Forms() {
  const ReactForm = () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // You can perform form submission logic here
    //   console.log("Form submitted:", formData);
    // };

    return (
      <div>
        <div className="container mt-5">
          <h2>React Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
} */}

export default Forms;

// import React, { useState } from "react";
// import "../../css/Body.css";

// function Body() {
//   // State to manage form data
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     firstName: "",
//     lastName: "",
//   });

//   // Handler function for form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handler function for form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to handle form submission, e.g., send data to a server
//     console.log("Form submitted with data:", formData);
//   };

//   return (
//     <>
//       <div className="content mx-4 my-3">
//         <div className="row ">
//           <div className="col-sm-12 col-lg-8 col-md-12 col-xxl-8 border border-2 border-secondary rounded-4 bg-white p-3">
//             <div className="fs-3 fw-medium ">
//               <span className=" text-info"></span>
//               <span className=" m-1">Form Task</span>
//             </div>
//             <form onSubmit={handleSubmit}>
//               <div className="row my-3 ">
//                 {/* Email input */}
//                 <div className="col-sm-12 col-lg-6 col-md-12 col-xl-6 ">
//                   <label htmlFor="email" className=" fw-medium  mx-3">
//                     Email address
//                   </label>
//                   <input
//                     type="text"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="rounded-4 border-2 border-secondary form-control fw-medium mx-3"
//                     placeholder="Email address"
//                     aria-label="Email address"
//                   />
//                 </div>

//                 {/* Password input */}
//                 <div className="col-sm-12 col-lg-6 col-md-12 col-xl-6 ">
//                   <label htmlFor="password" className="fw-medium mx-3">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     className="rounded-4 border-2 border-secondary form-control fw-medium mx-2 "
//                     placeholder="Password"
//                     aria-label="Password"
//                   />
//                 </div>
//               </div>

//               <div className="row">
//                 {/* First name input */}
//                 <div className="col-sm-12 col-lg-6 col-md-12 col-xl-6">
//                   <label htmlFor="firstName" className=" fw-medium mx-3">
//                     First name
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     className="rounded-4 border-2 border-secondary form-control fw-medium mx-3"
//                     placeholder="First name"
//                     aria-label="First name"
//                   />
//                 </div>

//                 {/* Last name input */}
//                 <div className="col-sm-12 col-lg-6 col-md-12 col-xl-6">
//                   <label htmlFor="lastName" className="fw-medium mx-3">
//                     Last name
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     className="rounded-4 border-2 border-secondary form-control fw-medium mx-2"
//                     placeholder="Last name"
//                     aria-label="Last name"
//                   />
//                 </div>
//               </div>

//               <div className="row mx-1 my-3 mb-0">
//                 {/* Agreement text */}
//                 <div className=" col-sm-12 col-lg-8 col-md-12 col-xl-8">
//                   <p className="">
//                     By creating an account, you agree to the{" "}
//                     <a href="#">Terms and Conditions</a> set out by this site,
//                     including our <a href="#">Cookie Use</a>
//                   </p>
//                 </div>

//                 {/* Continue button */}
//                 <div className="col-sm-12 col-lg-4 col-md-12 col-xl-3">
//                   <div className="mx-5">
//                     <button type="submit" className="btn bg-info">
//                       Continue
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Body;
