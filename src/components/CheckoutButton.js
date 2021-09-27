import React, { useContext } from "react";
import Warenkorb from "../store/store";
import { NavLink } from "react-router-dom";

const CheckoutButton = () => {
  const ctx = useContext(Warenkorb);

  if (ctx.waren.length > 0) {
    return (
      <div className="flex justify-end ">
        <NavLink
          to="/payment"
          className="py-2 px-4 text-md text-white bg-gray-700 hover:bg-gray-900"
          activeClassName="text-brandcol"
          exact
        >
          Checkout
        </NavLink>
      </div>
    );
  } else {
    return <></>;
  }
};

export default CheckoutButton;
