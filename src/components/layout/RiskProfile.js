import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import CardBoxs from "./CardBoxs";

const RiskProfile = (props) => {
  return (
    <div>
      <div id="risk_profile">
        <h1 className="Basic_Informations">{props.title}</h1>
        <div className="RiskAnalysis_sections">
          <div className="Security_Rating_Score">Security Rating Score</div>
          <div className="Security_Rating_Score"> Inherent Risk</div>
          <div className="Security_Rating_Score"> Residual Risk</div>
        </div>
        <div className="RiskAnalysis_sections">
          <div className="items_card_risk items_card_risk_1">
            <CardBoxs
              numbers={props.BitsightScore}
              classname="CardBox_details"
              cardboxHeader="BitSight Score"
            />
          </div>

          <div className="items_card_risk">
            <div className="CardBox_details_1">
              <ReactSpeedometer
                className="ReactSpeedometer_class"
                height={200}
                needleHeightRatio={0.7}
                value={props.ValueLow}
                customSegmentStops={[0,150,350,600,800,1000]}
                segmentColors={["#00b610","green", "orange","#ff4214" ,"red"]}
                currentValueText={props.ISF_Inherent_Risk_Rating}
                customSegmentLabels={[
                  
                  {
                    text: " Very Low ",
                    position: "OUTSIDE",
                    color: "#00b610",
                  },{
                    text: "Low ",
                    position: "OUTSIDE",
                    color: "green",
                  },
                  {
                    text: "Modrate",
                    position: "OUTSIDE",
                    color: "Orange",
                  },
                  {
                    text: "High ",
                    position: "OUTSIDE",
                    color: "#ff4214",
                  },
                  {
                    text: "Critical",
                    position: "OUTSIDE",
                    color: "red",
                  }
                ]}
                ringWidth={47}
                needleTransitionDuration={3333}
                needleTransition="easeElastic"
                needleColor={"blue"}
                textColor={"black"}
              />
            </div>
          </div>

          <div className="items_card_risk">
            <div className="CardBox_details_1">
              <ReactSpeedometer
                height={200}
                needleHeightRatio={0.7}
                value={props.inherentRisk}
                customSegmentStops={[0,150,350,600,800,1000]}
                segmentColors={["#00b610","green", "orange","#ff4214" ,"red"]}
                currentValueText={props.Risk_Rating}
                customSegmentLabels={[
                  
                  {
                    text: " Very Low ",
                    position: "OUTSIDE",
                    color: "#00b610",
                  },{
                    text: "Low ",
                    position: "OUTSIDE",
                    color: "green",
                  },
                  {
                    text: "Modrate",
                    position: "OUTSIDE",
                    color: "Orange",
                  },
                  {
                    text: "High ",
                    position: "OUTSIDE",
                    color: "#ff4214",
                  },
                  {
                    text: "Critical",
                    position: "OUTSIDE",
                    color: "red",
                  }
                ]}
                ringWidth={47}
                needleTransitionDuration={3333}
                needleTransition="easeElastic"
                needleColor={"blue"}
                textColor={"black"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskProfile;
