import React from "react";

const ContactInformations = (props) => {
  return (
    <div>
      <div id="Contect_info" className="Contect_info">
        <h1 className="Basic_Informations">{props.title}</h1>
        <div className="ContactInfo">
          <table className="contact_info_new">
          <tbody>
          <tr>
              <th colSpan={2}>Contact informations</th>
              <th colSpan={1}>Name</th>
              <th>Email</th>
            </tr>
            <tr>
              <td rowSpan={3}>Vendor Side</td>
              <td>Account Manager</td>
              <td>{props.Vendor_Account_Manager_ContactName}</td>
              <td>{props.Account_email}</td>
            </tr>
            <tr>
              <td>Technical Contact </td>
              <td>{props.technical_name}</td>
              <td>{props.technical_email}</td>
            </tr>
            <tr>
              <td>Vendor Contact</td>
              <td>{props.Vendor_Contact}</td>
              <td>{props.Vendor_Contact_Email_ID}</td>
            </tr>
            <tr>
              <td rowSpan={3}>Mars</td>
              <td>Business Contact</td>
              <td>{props.Business_Partner_Manager}</td>
              <td>{props.Business_Partner_Email_ID}</td>
            </tr>
            <tr>
              <td>Commercial Contact </td>
              <td>{props.MarsCommercialContact}</td>
              <td>{props.Commercial_email}</td>
            </tr>
            <tr>
              <td>Legal Contact</td>
              <td>{props.LegalContact}</td>
              <td>{props.LegalContact_email}</td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactInformations;
