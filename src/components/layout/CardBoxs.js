import React from "react";

export default function CardBoxs(props) {
  return (
    <div>
      <div  className={props.classname}>
        <div className="CardBox_text">
          <span>{props.numbers}</span>
          <div className="CardBox_text_">{props.cardboxHeader}</div>
        </div>
      </div>
    </div>
  );
}
