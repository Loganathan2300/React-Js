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
      zipcode:item.address.zipcode,
      // lat: item.geo.lat,
      // lng:item.geo.lng,
    }));

    // Set the transformed data into the state variable
    setData(transformedData);
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  const tableColumns = ["name", "username", "email", "street", "suite", "city","zipcode"];

  return (
    <div className="m-5 mt-0 mx-0">
      <div className="card position-fixed py-lg-5 pb-lg-0 pt-lg-4 py-sm-3 mt-0 m-3">
        <TableData tableHeader={tableColumns} tableDatas={data} />
      </div>
    </div>
  );
};

export default DataSheetList;

 