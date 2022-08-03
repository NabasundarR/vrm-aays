import React from "react";
import { useState, useEffect } from "react";

import CardBoxs from "../layout/CardBoxs";
import Report from "../layout/Report";
import NavigarionBar from "../layout/NavigarionBar";
import SideMenu from "../layout/SideMenu";
import Loading from "../layout/Loading";
import SearchBar from "../layout/SearchBar";

export default function Homepage() {
  const [Summrydata, setSummrydata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseUrl = "/vrm/summary";
  const apiKey =  "9f5f7eed-5924-440f-8913-aabdf45b03e7";

  useEffect(() => {
    const fetchSummary = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        headers: {
          "x-api-key" : `${apiKey}` 
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              setSummrydata(json);
              setError(null);
              setLoading(true);
            });
          }
        })
        .catch((err) => {
          setError(err.message);
          setSummrydata(null);
          console.log(error);
        });
    };
    fetchSummary();
  }, [baseUrl,apiKey]); 

  return (
    <div>
      <NavigarionBar />
      <SideMenu />
      <div>
        <div id="main">
          {loading ? (
            <>
              <div className="searchBarSections">
                <h1 className="vender_Risk_Management_System">
                  Vendor Risk Management System
                </h1>
                <div className="headeritemssections">
                  <div id="searchBar" className="Search_section">
                    <div id="Seachbarid_" className="SearchBarClass">
                      <SearchBar />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="CardSections">
                <div>
                  <div className="items_card_box">
                    <div className="CardSections_1">
                      <div>
                        <CardBoxs
                          classname="CardBox"
                          numbers={Summrydata.totalNofVendors}
                          className="Number_of_Venders"
                          cardboxHeader="Number of Vendors"
                        />
                      </div>
                      <div>
                        <CardBoxs
                          classname="CardBox_1"
                          numbers={Summrydata?.vendorsByRiskCategories.HIGH}
                          className="high_risk_venders"
                          cardboxHeader="Count of High Risk Vendors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="PBIReport">
                <Report />
              </div>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}
