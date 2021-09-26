import React from "react";
import CartItem from "./CartItem";
import { useContext } from "react";
import Warenkorb from "../store/store";
import CheckoutButton from "./CheckoutButton";

const Cart = () => {
  const ctx = useContext(Warenkorb);

  const totalsum =
    ctx.waren.length > 0
      ? parseFloat(
          ctx.waren
            .map((item) => item.price)
            .reduce((prev, next) => prev + next)
        ).toFixed(2)
      : 0;

  return (
    <div className="pt-32 flex justify-center">
      <div className="bg-gray-300 p-4 shadow-md max-w-4xl w-full hover:shadow-lg">
        <div className="text-center mb-4  ">
          <h1 className="text-2xl font-bold">Items im Warenkorb</h1>
        </div>
        {ctx.waren.length > 0 ? (
          ctx.waren.map((item, index) => {
            return (
              <CartItem
                id={index}
                key={index}
                img={item.img}
                product={item.product}
                price={item.price}
              />
            );
          })
        ) : (
          <div className="flex justify-end py-2">
            <h1 className="text-xl font-semibold">Warenkorb leer!</h1>
          </div>
        )}
        <div className="border-t-2 border-gray-800 flex justify-between py-4">
          {ctx.waren.length > 0 ? (
            <button
              className="bg-gray-900 px-6 rounded-sm text-white text-md  mt-2 hover:bg-black"
              onClick={ctx.onRemoveAll}
            >
              Warenkorb leeren
            </button>
          ) : (
            <div></div>
          )}
          <div>
            <p>{ctx.waren.length} Items</p>
            <h1 className="text-2xl font-bold">
              {ctx.waren.length > 0 ? totalsum : "0"}€
            </h1>
          </div>
        </div>
        <CheckoutButton></CheckoutButton>
      </div>
    </div>
  );
};

export default Cart;
