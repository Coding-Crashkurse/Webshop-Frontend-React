import React, { useContext } from "react";
import Warenkorb from "../store/store";

const CardCounter = () => {
  const ctx = useContext(Warenkorb);

  if (ctx.waren.length > 0) {
    return (
      <div className="absolute -top-3 right-0 text-sm bg-red-800 rounded-full w-6 h-6 flex items-center justify-center">
        {ctx.waren.length}
      </div>
    );
  } else {
    return <React.Fragment></React.Fragment>;
  }
};

export default CardCounter;
