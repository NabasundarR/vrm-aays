import React from "react";

const BasicInformations = (props) => {
  return (
    <div>
      <div id="BasicInfo_id" className="basic_info">
        <div className="Basic_Informations">{props.title}</div>
        <br />
        <table id="myTable">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{props.Owner}</td>
            </tr>

            <tr>
              <th>Address</th>
              <td>
                {props.Address}
              </td>
            </tr>

            <tr>
              <th>Vendor Url</th>
              <td>
                {" "}
                <a href={props.Vendor_URL}>{props.Vendor_URL}</a>
              </td>
            </tr>

            <tr>
              <th>SAP ID Number</th>
              <td>{props.VendorID}</td>
            </tr>

            <tr>
              <th>Vendor Catagory</th>
              <td>{props.CommericalCategory}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicInformations;
