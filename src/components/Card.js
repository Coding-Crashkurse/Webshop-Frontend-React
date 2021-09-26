import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Warenkorb from "../store/store";

const Card = ({ product, img, description, price }) => {
  const ctx = useContext(Warenkorb);

  const data = { product, img, description, price };

  return (
    <div className="max-w-xl shadow-md hover:shadow-xl">
      <img src={img}></img>
      <div className="p-4">
        <h2 className="text-xl py-2 uppercase">{product}</h2>
        <p>{description}</p>
        <h1 className="text-2xl font-bold py-2">{price}€</h1>
        <div className="flex justify-end p-2">
          <FontAwesomeIcon
            onClick={() => {
              ctx.onAddtoCart(data);
            }}
            icon={faShoppingCart}
            className="text-3xl cursor-pointer hover:text-red-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
