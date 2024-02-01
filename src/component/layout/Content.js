import React from "react";
// import Round from "../../Assest/Round1";
//import '../../css/Content.css'
function Content() {
  return (
    <div>
      <div className="container">
        <div className="">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="">       
              <div className="row">
                  <div className="col-lg-3 col-sm-12 col-md-12"></div>
                  <div className="col-lg-3 col-sm-12 col-md-12"></div>
              </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-8 col-sm-12 col-md-12">
                <div className="card">
                <h3 className="mx-2 my-2 ">FTS</h3>
                <table className="borde mx-lg-3 mb-lg-2 mx-2">
                      <thead>
                        <tr>
                          <th rowSpan="2">ENAME</th>
                          <th rowSpan="2">DESINGNATION</th>
                        </tr>
                        <tr>
                          <th>SAL</th>
                          <th>COMM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Tamil</td>
                          <td>Manager</td>
                          <td>4.5L</td>
                          <td>25,000</td>
                        </tr>
                        <tr>
                          <td>Mani</td>
                          <td>CTO</td>
                          <td rowSpan="3">2.5L</td>
                          <td>40,000</td>
                        </tr>
                        <tr>
                          <td>Sankar</td>
                          <td>Asst.Manage</td>
                          <td>15,000</td>
                        </tr>
                        <tr>
                          <td>Durai</td>
                          <td>Techincal Analyst</td>
                          <td rowSpan="2">10,000</td>
                        </tr>
                        <tr>
                          <td>Logu</td>
                          <td>CEO</td>
                          <td>7L</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                        </tr>
                      </tfoot>
                 </table>
                 {/* <table className=" mx-3 mb-2 m2">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Board</th>
                            <th>Y.O.P</th>
                            <th>Percentage</th>   
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10th</td>
                            <td>CBSE</td>
                            <td>2015</td>
                            <td>90%</td>
                        </tr>
                        <tr>
                            <td>12th</td>
                            <td>CBSE</td>
                            <td>2017</td>
                            <td>95%</td>
                        </tr>
                        <tr>
                            <td>B.tech</td>
                            <td>VTU</td>
                            <td>2021</td>
                            <td>97%</td>
                        </tr>
                    </tbody>
                 </table> */}
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* <h4>Content</h4> */}
      {/* <img src={Round} alt="" /> */}
      {/* <img src={Graf} alt="FTS Logo" width="60" height="40"></img> */}
      {/* <img src={Round} alt="Round" srcset="" /> */}
    </div>
  );
}

export default Content;
