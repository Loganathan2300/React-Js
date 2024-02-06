import React from "react";
import Moment from 'react-moment';

function Datashow({ seletedRow, handleBackButton }) {
  const originalDate = seletedRow.date_of_birth
  const finalDate = originalDate.split(' ')[0]
  return (
    <div className="col-sm-12 col-md-12 col-lg-12">
      <div className=" w-100 px-3 py-3 mt-0">
        <div className="container py-">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5 w-75">
              <div className="card" style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }}>
                <div className="card-body p-4 text-black">
                  <div>
                    <h6 className="mb-"></h6>
                    <h4>Details Show :</h4>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <p className="fw-bold mb-0"></p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                        alt="Generic placeholder image"
                        className="img-fluid rounded-circle border border-dark border-3"
                        style={{ width: '70px' }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <p className="mb-0 me-0 my-4"><span>NAME: {seletedRow.name}</span><br/><br/></p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <span>EMAIL : {seletedRow.email}</span><br/>
                  <span>DOB:</span><Moment format="YYYY/MM/DD"parse="YYYY-MM-DD HH:mm">{finalDate}</Moment><br/>
                  <span>AGE : {seletedRow.age}</span><br/>
                  <span>ADDRESS 1: {seletedRow.address.split(",")[0]}</span><br/>
                  <span>ADDRESS 2 : {seletedRow.address.split(",")[1]}</span><br/>
                  <span>CITY : {seletedRow.address.split(",")[2]}</span><br/>
                  <span> PIN CODE : {seletedRow.address.split(",")[3]}</span><br/>
                  <span>ABOUT : {seletedRow.about}</span><br/>
                  <p className="mb-0"> Location: <a href={`https://maps.google.com/?q=${seletedRow.latitude},${seletedRow.longitude}`}> View on Map</a></p><br/>
                  <button className="w-25 rounded-2 py-1 btn bg-dark text-white" onClick={handleBackButton}> Back to Show </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
  }

export default Datashow;

// import React  from 'react';
// import Moment from 'react-moment';

// export default class MyComponent extends React.Component {
//     render() {
//         return (
//             const dateToFormat = '1976-04-19T12:59-0500';
//             <Moment>{dateToFormat}</Moment>
//         );
//     }
// }

        {/* <span>ID : {seletedRow._id}</span> */}
        {/* <span>NAME: {seletedRow.name}</span>
        <span>EMAIL : {seletedRow.email}</span>
        
        <span>AGE : {seletedRow.age}</span>
        <span>LOCATION : {seletedRow.latitude}</span>
        <span>ABOUT : {seletedRow.about}</span>
        <span>ADDRESS : {seletedRow.address}</span>
        <p> Location: <a href={`https://maps.google.com/?q=${seletedRow.latitude},${seletedRow.longitude}`}> View on Map</a></p>
        <button className="w-25" onClick={handleBackButton}> Back to Show </button> */}
        {/* <section className="w-100" style={{ backgroundColor: '#eee' }}> */}