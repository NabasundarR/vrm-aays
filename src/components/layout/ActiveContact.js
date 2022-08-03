import React from "react";

const ActiveContact = (props) => {
  return (
    <div>
      <div id="ActiveContact">
        <h1 className="Basic_Informations">{props.title}</h1>

        <div className="Active_contact">
          <table>
            <tbody>
              <tr className="tech_border_right">
                <td className="tech_border_right">Active Contract</td>
                <td className="tech_border_left">
                  {props.Link_to_Commercial_Contract}
                </td>
              </tr>
              <tr>
                <th>Serial No</th>
                <th>Title of Content</th>
              </tr>
              <tr>
                <td>1</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActiveContact;
