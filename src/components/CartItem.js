import React, { useContext } from "react";
import Warenkorb from "../store/store";

const CartItem = ({ id, img, product, price }) => {
  const ctx = useContext(Warenkorb);

  return (
    <div className="grid grid-cols-4 p-2 col-span-1">
      <img src={img} width="100px" />
      <h1 className="text-xl flex items-center">{product}</h1>
      <div className="flex p-2 items-center">
        <button
          className="text-md md:text-xl bg-white py-2 px-4 rounded-lg hover:text-white hover:bg-brandcol"
          onClick={() => {
            ctx.onRemoveCart(id);
          }}
        >
          Entferne Item
        </button>
      </div>
      <div className="flex items-center justify-end">
        <h3 className="text-xl font-bold">{price}€</h3>
      </div>
    </div>
  );
};

export default CartItem;
