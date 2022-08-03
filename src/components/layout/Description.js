import React from "react";

const Description = (props) => {
  return (
    <div>
      <div id="descService_id" className="desc_services">
        <h1 className="Basic_Informations">{props.title}</h1>
        <div className="dec_text">
          <span className="das_services">{props.des}</span>
        </div>
      </div>
    </div>
  );
};

export default Description;
