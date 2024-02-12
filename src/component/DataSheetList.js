import React, { useState, useEffect } from "react";
import TableData from "./TableData";
import { Datasheet } from "./Datasheet";

export const DataSheetList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Map through Datasheet to transform each item as per your requirement
    const transformedData = Datasheet.map((item) => ({
      name: item.name,
      username: item.username,
      email: item.email,
      street: item.address.street,
      suite: item.address.suite,
      city: item.address.city,
    }));

    // Set the transformed data into the state variable
    setData(transformedData);
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  const tableColumns = ["name", "username", "email", "street", "suite", "city"];

  return (
    <div className="m-5">
      <div className="card py-lg-5 pb-lg-0 pt-lg-4 py-sm-3">
        <TableData tableHeader={tableColumns} tableDatas={data} />
      </div>
    </div>
  );
};

export default DataSheetList;

 