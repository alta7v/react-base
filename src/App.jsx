import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(10);
  const [faceShowFlag, setFaseShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaseShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaseShowFlag(true);
    } else {
      faceShowFlag && setFaseShowFlag(false);
    }
  }, [num]); // 配列で渡した変数に変更があると処理が行われる

  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <ColorfulMessage color="Blue">nice to meet you</ColorfulMessage>
      <ColorfulMessage color="pink">i am fine</ColorfulMessage>
      <button onClick={onClickCountUp}>Count Up</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>^^</p>}
    </>
  );
};

export default App;
