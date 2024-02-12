import React from "react";
// import Graf1 from "../../Assest/Round1.jpeg";
// import Graf2 from "../../Assest/Round2.jpeg";
import round from "../../Assest/p1.png"
import round1 from "../../Assest/p2.png"
function Dashboard() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="">
            <div className="col-lg-8 col-md-12 col-sm-12 w-100">
              <div className="mb-0">
                <div className="row">
                  <div className="col-lg-5 col-sm-12 col-md-12 w-50 h-50">
                    <div className="card ">
                        <img src={round} alt="imgpsh_fullsize_anim" className="m-0" />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-12 col-md-12 w-50 h-100">
                    <div className="card">
                      <img src={round1} alt="imgpsh_fullsize_anim(1)" className="my-3" />     
                    </div>
                  </div>
                </div>
              </div>
              {/* my-2 my-lg-0 */}
              <div className="mt-lg-5 me-lg-2">
                <div className="row text-center">
                  <div className="col-lg-10 col-sm-12 col-md-12 w-100">
                    <div className="mb-1">
                      <div className="table-responsive rounded-3">
                        <table className="table table-bordered">
                          <thead className="table-dark text-center">
                            <tr>
                              <th scope="col">S.NO</th>
                              <th scope="col">FIRST</th>
                              <th scope="col">LAST</th>
                              <th scope="col">EMAIL ID</th>
                              <th scope="col">PHONE</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Arulkumar</td>
                              <td>Nallamuthu</td>
                              <td>arulkumar123@gmail.com</td>
                              <td>9876543210</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Velumani</td>
                              <td>Ganapathi</td>
                              <td>veluganapayhi2300@gmail.com</td>
                              <td>9876543211</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Vanitha</td>
                              <td>Velumani</td>
                              <td>Vanithavelu1603@gmail.com</td>
                              <td>9876543212</td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Krithikaarav</td>
                              <td>Gokulkishnan</td>
                              <td>KrithikGokul123@gmail.com</td>
                              <td>9876543213</td>
                            </tr>
                            <tr>
                              <th scope="row">5</th>
                              <td>Krishshanth</td>
                              <td>Gokulkrishnan</td>
                              <td>KrishGokul123@gmail.com</td>
                              <td>9876543214</td>
                            </tr>
                            <tr>
                              <th scope="row">6</th>
                              <td>Gokulkrishnan</td>
                              <td>Nallamuthu</td>
                              <td>Krishnannalamuthu123@gmail.com</td>
                              <td>9876543216</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
