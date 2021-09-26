import React, { useContext } from "react";
import Warenkorb from "../store/store";

const CheckoutButton = () => {
  const ctx = useContext(Warenkorb);

  if (ctx.waren.length > 0) {
    return (
      <div className="flex justify-end ">
        <button className="bg-gray-900 text-white py-2 px-6 hover:bg-black">
          Checkout
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex justify-end ">
        <button className="bg-gray-900 text-white py-2 px-6 hover:bg-black cursor-not-allowed opacity-50">
          Checkout
        </button>
      </div>
    );
  }
};

export default CheckoutButton;
