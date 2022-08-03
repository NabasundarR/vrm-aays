import React from "react";

const TechnicalInformations = (props) => {
  return (
    <div>
      <div id="Technical_Informations">
        <h1 className="Basic_Informations">{props.title}</h1>

        <div className="Active_contact">
          <table>
            <tbody>
              
            <tr className="tech_border_right">
              <td className="tech_border_right">Technical informations</td>
              <td className="tech_border_left"></td>
            </tr>

            <tr>
              <th> Segment Associations</th>
              <td>{props.Segment_Associations}</td>
            </tr>

            <tr>
              <th> Saas Address</th>
              <td>{props.Saas_Address}</td>
            </tr>

            <tr>
              <th> Type of Data classifications - Pii, Pci, Hc flags etc </th>
              <td>{props.Type_of_Data}</td>
            </tr>

            <tr>
              <th>EA#</th>
              <td>{props.EA}</td>
            </tr>

            <tr>
              <th> PIA</th>
              <td>{props.PIA}</td>
            </tr>

            <tr>
              <th> S2s VPN</th>
              <td>{props.s2s}</td>
            </tr>

            <tr>
              <th> VDI</th>
              <td>{props.VDI}</td>
            </tr>

            <tr>
              <th> FW rules</th>
              <td>{props.fw}</td>
            </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TechnicalInformations;
