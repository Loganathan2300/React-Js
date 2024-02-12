import React, { useState } from "react";

const itemPage = 10;
const TableData = ({tableHeader,tableDatas,showButton,handleShowButton,button,S_no}) => {
  const [pageChange, setPageChange] = useState(1);
  const [searchTerms, setSearchTeams] = useState("");

  const filterData = tableDatas.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerms.toLowerCase())
    )
  );

  const pageLength = filterData.length;
  const totalPages = Math.ceil(pageLength / itemPage);
  const dataShowDetail = filterData.slice(
    (pageChange - 1) * itemPage,
    pageChange * itemPage
  );
  console.log(dataShowDetail);
  const startingNumnber = (pageChange - 1) * itemPage + 1;

  let page = [];
  for (let i = 1; i <= totalPages; i++) {
    page.push(i);
  }
  return (
    <div className="col-lg-12 col-sm-12 col-md-12 ">
      <div className="">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="row my-2">
              <div className="col-6">
                <div className="fw-bold mx-lg-4 ">Total Data : {pageLength} </div>
              </div>
              <div className="col-6">
                <div className="text-end me-5 ">
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-lg-3 py-lg-1 border-3 fw-bold rounded-1"
                    value={searchTerms}
                    onChange={(e) => setSearchTeams(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-100">
            <div className=" row">
              <div className="col-lg-12 col-sm-12 col-md-12 ">
                <div className="table-responsive mt-4 mx-lg-4 rounded-3">
                  <div style={{ maxHeight: "300px" }}>
                    <table className="table table-striped table-hover text-center">
                      <thead className="table-secondary">
                        <tr>
                          {tableHeader.map((header) => (
                            <th key={header}>{header}</th>
                          ))}
                          {/* {No && <th>S_no</th>} */}
                          {button && <th>showButton</th>}
                        </tr>
                      </thead>
                      <tbody style={{ overflowY: "auto"}}>
                        {dataShowDetail.map((row, index) => (
                          <tr key={index}>
                            {/* <td>{startingNumnber + index}</td> */}
                            {tableHeader.map((header) => (
                              <td key={header}>{row[header]}</td>
                            ))}
                            {showButton && (
                              <td>
                                <button onClick={() => handleShowButton(row._id)} className="btn btn-primary px-4 rounded-5">
                                  Show
                                </button>
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12 my-4 mb-0">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  {page.map((pagenumber) => (
                    <button key={pagenumber} onClick={() => setPageChange(pagenumber)}
                      className="mx-1 px-3 py-1 rounded-3 ">{pagenumber}</button>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableData;