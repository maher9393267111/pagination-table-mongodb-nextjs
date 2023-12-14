import React, { useEffect, useRef, useState ,useContext } from "react";

import { observer } from "mobx-react-lite";
import { Context } from "./_app";


import toolState from "../store/one";

const Canvas = observer(() => {
// @ts-expect-error
  const { cart  } = useContext(Context);

  const changeColor = (e:React.ChangeEvent<HTMLInputElement>) => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  };

  console.log("DAta-->", toolState?.tool);

  return (
    <div className="canvas">
      <input
        onChange={ changeColor}
        // onChange={(e) => changeColor(e)}
        style={{ marginLeft: 10 }}
        type="color"
      />

      {toolState?.tool?.fillColor}

<div className=" cursor-pointer" onClick={()=>{cart.setQuantityCartItems()}}>
  add
</div>


      
     
    </div>
  );
});

export default Canvas;


