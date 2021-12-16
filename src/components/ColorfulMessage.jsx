import React from "react";

const ColorfulMessage = (props) => {
  //console.log(props);
  const { color, children } = props;
  const contentStyle = {
    //color: color,
    color,
    fontSize: "18px" // パラメータ名はキャメルケースになる
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
