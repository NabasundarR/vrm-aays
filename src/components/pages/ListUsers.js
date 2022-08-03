import React, { useState, useEffect, useRef } from "react";
import NavigarionBar from "../layout/NavigarionBar";
import SideMenu from "../layout/SideMenu";
import Loading from "../layout/Loading";
import BasicInformations from "../layout/BasicInformations";
import Description from "../layout/Description";
import ContactInformations from "../layout/ContactInformations";
import ActiveContact from "../layout/ActiveContact";
import TechnicalInformations from "../layout/TechnicalInformations";
import RiskProfile from "../layout/RiskProfile";
import $ from "jquery";
import { FaPrint } from "react-icons/fa";
import { useReactToPrint } from 'react-to-print';
import { Link } from "react-router-dom";

const ListUsers = () => {
  const [ListofUsers, setListofUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const componentRef_1 = useRef(null);
  const componentRef_2 = useRef(null);
  const componentRef_3 = useRef(null);
  const componentRef_4 = useRef(null);
  const componentRef_5 = useRef(null);
  const componentRef_6 = useRef(null);

  const url = new URL(window.location.href);
  let Urlname = url.search;
  const dataDecode = decodeURI(Urlname);
  const getusername = dataDecode.replace("?name=", "");

  const baseUrl = "/vrm/vendordetail?name=";
  const apiKey = "9f5f7eed-5924-440f-8913-aabdf45b03e7";

  useEffect(() => {
    const fetchUsersdDetails = async () => {
      await fetch(`${baseUrl}${getusername}`, {
        method: "GET",
        headers: {
          "x-api-key": `${apiKey}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              setListofUsers(json);
              setError(null);
              setLoading(true);
            });
          }
        })
        .catch((err) => {
          setError(err);
          setListofUsers(null);
          console.log(error);
        });
    };
    fetchUsersdDetails();
  }, [baseUrl, apiKey]);

  const product = ListofUsers.map((item) => {
    return item;
  });

  let ValueLow = 0;
  let inherentRisk = 0;

  const VendorCheck = () => {
    // Basic Informations
    {
      ListofUsers &&
        ListofUsers.map((items) => {
          if (items.ADDRESS === "") {
            items.ADDRESS = "Not Availabe from Sap data sources";
          }
          if (items.VENDOR_NAME === "") {
            items.VENDOR_NAME = "Not Availabe from Sap data sources";
          }
          if (items.VENDOR_ID === "") {
            items.VENDOR_ID = "Not Availabe from Sap data sources";
          }
          if (items.VENDOR_URL === "") {
            items.VENDOR_NAME = "Not Availabe from Sap data sources";
          }
          if (items.VENDOR_CATEGORY === "") {
            items.VENDOR_CATEGORY = "Not Availabe from Sap data sources";
          }

          // Descriptions Of Services

          if (
            items.DESCRIPTION_OF_SERVICES === "" ||
            items.DESCRIPTION_OF_SERVICES === null
          ) {
            items.DESCRIPTION_OF_SERVICES = "Not Availabe from data sources";
          }

          // Contact Informations

          if (items.VENDOR_ACCOUNT_MANAGER_CONTACTNAME === "") {
            items.VENDOR_ACCOUNT_MANAGER_CONTACTNAME = "Not Availabe from data sources";
          }

          if (items.VENDOR_CONTACTNAME === "") {
            items.VENDOR_CONTACTNAME = "Not Availabe from data sources";
          }

          if (items.VENDOR_CONTACT_EMAILID === "") {
            items.VENDOR_CONTACT_EMAILID = "Not Availabe from data sources";
          }

          if (items.BUSINESS_PARTNER_MANAGER === "") {
            items.BUSINESS_PARTNER_MANAGER = "Not Availabe from data sources";
          }

          if (items.MARSCOMMERCIALCONTACT === "") {
            items.MARSCOMMERCIALCONTACT = "Not Availabe from data sources";
          }

          if (items.VENDOR_ACCOUNT_MANAGER_CONTACTNAME === "") {
            items.VENDOR_ACCOUNT_MANAGER_CONTACTNAME = "Not Availabe from data sources";
          }
          if (items.MARSCOMMERCIALCONTACT === "") {
            items.MARSCOMMERCIALCONTACT = "Not Availabe from data sources";
          }

          if (
            items.MARS_COMMERCIAL_CONTACT_EMAILS === "" ||
            items.MARS_COMMERCIAL_CONTACT_EMAILS === null
          ) {
            items.MARS_COMMERCIAL_CONTACT_EMAILS = "Not Availabe from data sources";
          }

          if (
            items.TECHNICAL_CONTACT_NAME === "" ||
            items.TECHNICAL_CONTACT_NAME === null
          ) {
            items.TECHNICAL_CONTACT_NAME = "Not Availabe from data sources";
          }
          if (
            items.TECHNICAL_CONTACT_EMAIL === "" ||
            items.TECHNICAL_CONTACT_EMAIL === null
          ) {
            items.TECHNICAL_CONTACT_EMAIL = "Not Availabe from data sources";
          }

          // Technical informations
          if (
            items.SEGMENT_ASSOCIATION === "" ||
            items.SEGMENT_ASSOCIATION === null
          ) {
            items.SEGMENT_ASSOCIATION = "Not Availabe from data sources";
          }
          if (items.BITSIGHT_SCORE === "" || items.BITSIGHT_SCORE === null) {
            items.BITSIGHT_SCORE = "Not Availabe from data sources";
          }
        });
    }
  };

  const dataRiskCheck = () => {
    {
      ListofUsers &&
        ListofUsers.map((products) => {
          //  console.log(products)
          if (products.ISF_INHERENT_RISK_RATING === "Low") {
            ValueLow = 250;
          } else if (products.ISF_INHERENT_RISK_RATING === "Very Low") {
            ValueLow = 100;
          } else if (products.ISF_INHERENT_RISK_RATING === "Moderate") {
            ValueLow = 500;
          } else if (products.ISF_INHERENT_RISK_RATING === "High") {
            ValueLow = 700;
          } else if (products.ISF_INHERENT_RISK_RATING === "Critical") {
            ValueLow = 900;
          }
          if (products.RISK_RATING === "Low") {
            inherentRisk = 250;
          } else if (products.RISK_RATING === "Very Low") {
            inherentRisk = 100;
          } else if (products.RISK_RATING === "Moderate") {
            inherentRisk = 500;
          } else if (products.RISK_RATING === "HIGH") {
            inherentRisk = 700;
          } else if (products.RISK_RATING === "Critical") {
            inherentRisk = 900;
          }
        });
    }
  };

  const print_btn = () => {
    $("#MultiCheckbox_div").slideToggle(true);    
  };

  

 const PrintDivComponent = useReactToPrint({
  content: () => {
    const tableStat_1 = componentRef_1.current.cloneNode(true);
    const tableStat_2 = componentRef_2.current.cloneNode(true);
    const tableStat_3 = componentRef_3.current.cloneNode(true);
    const tableStat_4 = componentRef_4.current.cloneNode(true);
    const tableStat_5 = componentRef_5.current.cloneNode(true);
    const tableStat_6 = componentRef_6.current.cloneNode(true);

    const PrintElem = document.createElement('div');
    const statElem = <span>Text</span>;
    PrintElem.innerHTML = statElem;
    
    dataItemsArray.forEach(element => {
     // console.log("Data is " + element);
        if(element === 'tableStat_1'){
          element = tableStat_1
        }
       else if(element === 'tableStat_2'){
          element = tableStat_2
        }
        else if(element === 'tableStat_3'){
          element = tableStat_3
        }
        else if(element === 'tableStat_4'){
          element = tableStat_4
        }
        else if(element === 'tableStat_5'){
          element = tableStat_5
        }
        else if(element === 'tableStat_6'){
          element = tableStat_6
        }
        PrintElem.appendChild(element);
    });
   return PrintElem;

  }
});

  const dataItemsArray =[]

  const Printing_report_by_id = () => {

    dataItemsArray.splice(0, dataItemsArray.length)

    var checked = document.querySelectorAll("#checkboxes :checked");
    var selected = [...checked].map((option) => option.value);

   // console.log("Selected value",selected)
  
    let selectedValue = "";
    selected.forEach(element => {
      selectedValue = "tableStat_" + element ; 
      console.log(selectedValue);
      dataItemsArray.push(selectedValue);

    });
    PrintDivComponent();

  }

  const closeDiv = () => {
    
    $(document).mouseup(function(e) 
    {
        var container = $("#MultiCheckbox_div");
    
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.hide(true);
            $(':checkbox').prop('checked', false).removeAttr('checked');
        }
    });
  }

  const hidePrintDiv = () =>{
    if(getusername === 'udflar'){
     // console.log("heloo")
      $("#checkbox_div_id_2").remove();
      $("#checkbox_div_id_3").remove();
      $("#checkbox_div_id_5").remove();
    }
  }
 
  dataRiskCheck();
  VendorCheck();
  closeDiv();
  hidePrintDiv();

  return (
    <div id="fullpage">
      <NavigarionBar/>
      <SideMenu />
      <div id="main">
        {loading ? (
          <>
            {ListofUsers &&
              ListofUsers.map((user) => (
                <div key={user}>
                  <div>
                    <div>
                      <div className="List_users_page">
                        <div className="searchBarSections">
                          <h1 className="vender_Risk_Management_System">
                            Vendor Risk Management System
                          </h1>
                          <div className="Search_section">
                            <div className="MutipleSeclections_div">
                              <button
                                onClick={print_btn}
                                id="printBtn"
                                className="btn_Print"
                              >
                                <div className="Print_flex">
                                  <span>
                                    <FaPrint />
                                  </span>
                                  <span> Print Report</span>
                                </div>
                              </button>

                              <div id="MultiCheckbox_div">
                                <div id="checkboxes">
                                  <label id="checkbox_div_id_1" htmlFor="one">
                                    <input
                                      type="checkbox"
                                      name="input_check"
                                      value={1}
                                      className="item_input checkbox-round"
                                      id="one"
                                    />
                                    Basic Informations
                                  </label>
                                  <label id="checkbox_div_id_2" htmlFor="two">
                                    <input
                                      type="checkbox"
                                      name="input_check"
                                      value={2}
                                      className="item_input checkbox-round"
                                      id="two"
                                    />
                                    Descriptions Of Services
                                  </label>
                                  <label id="checkbox_div_id_3" htmlFor="three">
                                    <input
                                      type="checkbox"
                                      name="input_check"
                                      value={3}
                                      className="item_input checkbox-round"
                                      id="three"
                                    />
                                    Contact Informations
                                  </label>

                                  <label id="checkbox_div_id_4" htmlFor="four">
                                    <input
                                      type="checkbox"
                                      name="input_check"
                                      value={4}
                                      className="item_input checkbox-round"
                                      id="four"
                                    />
                                    Active Contract
                                  </label>
                                  <label id="checkbox_div_id_5" htmlFor="five">
                                    <input
                                      type="checkbox"
                                      name="input_check"
                                      value={5}
                                      className="item_input checkbox-round"
                                      id="five"
                                    />
                                    Technical Informations
                                  </label>
                                  <label id="checkbox_div_id_6" htmlFor="six">
                                    <input
                                      type="checkbox"
                                      name="input_check"
                                      value={6}
                                      className="item_input checkbox-round"
                                      id="six"
                                    />
                                    Risk Profile
                                  </label>

                                  <input
                                    onClick={Printing_report_by_id}
                                    type="submit"
                                    className="Print_rep"
                                    value="Print Report"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="pathDisplay">
                          <span> <Link to='/'>Home</Link> /</span>
                          <div>{user.VENDOR_NAME}</div>
                        </div>

                        <div className="allcomponents">
                        
                          <div
                            ref={componentRef_1}
                            id="Basic_info_div_id"
                            className="Basic_info_div"
                          >
                            <BasicInformations

                              title="Basic Informations"
                              Owner={user.VENDOR_NAME}
                              Address={user.ADDRESS}
                              Vendor_URL={user.VENDOR_URL}
                              VendorID={user.VENDOR_ID}
                              CommericalCategory={user.VENDOR_CATEGORY}
                            />
                          </div>

                          <div
                            id="Descriptions_Of_Services_id"
                            ref={componentRef_2}
                            className="Descriptions_Of_Services"
                          >
                            <Description
                              title="Descriptions Of Services"
                              des={user.DESCRIPTION_OF_SERVICES}
                            />
                          </div>

                          <div
                            ref={componentRef_3}
                            className="Contact_Informations"
                          >
                            <ContactInformations
                              title="Contact Informations"
                              Vendor_Account_Manager_ContactName={
                                user.VENDOR_ACCOUNT_MANAGER_CONTACTNAME
                              }
                              Account_email={"Not Availabe from data sources"}
                              technical_name={user.TECHNICAL_CONTACT_NAME}
                              technical_email={user.TECHNICAL_CONTACT_EMAIL}
                              Vendor_Contact={user.VENDOR_CONTACT}
                              Vendor_Contact_Email_ID={
                                user.VENDOR_CONTACT_EMAILID
                              }
                              Business_Partner_Manager={
                                user.BUSINESS_PARTNER_MANAGER
                              }
                              Business_Partner_Email_ID={
                                user.BUSINESS_PARTNER_EMAILID
                              }
                              MarsCommercialContact={user.MARSCOMMERCIALCONTACT}
                              Commercial_email={
                                user.MARS_COMMERCIAL_CONTACT_EMAILS
                              }
                              LegalContact="Not Availabe from data sources"
                              LegalContact_email="Not Availabe from data sources"
                            />
                          </div>

                          <div ref={componentRef_4} className="Active_Contact">
                            <ActiveContact
                              title="Active Contract"
                              Link_to_Commercial_Contract={"Not Availabe from data sources"}
                            />
                          </div>

                          <div
                            ref={componentRef_5}
                            className="Technical_Informations"
                          >
                            <TechnicalInformations
                              title="Technical Informations"
                              Segment_Associations={user.SEGMENT_ASSOCIATION}
                              Saas_Address="Not Availabe from data sources"
                              Type_of_Data="Not Availabe from data sources"
                              EA="Not Availabe from data sources"
                              PIA="Not Availabe from data sources"
                              s2s="Not Availabe from data sources"
                              VDI="Not Availabe from data sources"
                              fw="Not Availabe from data sources"
                            />
                          </div>

                          <div ref={componentRef_6} className="Risk_Profile">
                            <RiskProfile
                              title="Risk Profile"
                              Risk_Rating={user.RISK_RATING}
                              ISF_Inherent_Risk_Rating={
                                user.ISF_INHERENT_RISK_RATING
                              }
                              inherentRisk={inherentRisk}
                              ValueLow={ValueLow}
                              BitsightScore={user.BITSIGHT_SCORE}
                            />
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default ListUsers;
