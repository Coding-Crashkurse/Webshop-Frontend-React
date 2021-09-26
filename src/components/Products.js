import React from "react";
import Card from "./Card";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

const products = [
  {
    id: 1,
    product: "Monitor LG34",
    img: img1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo",
    price: 1299.99,
  },
  {
    id: 2,
    product: "Gamer Maus",
    img: img3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo",
    price: 29.99,
  },
  {
    id: 3,
    product: "Laptop Highend",
    img: img2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo",
    price: 899.99,
  },
  {
    id: 4,
    product: "Maus Schnurlos",
    img: img1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo",
    price: 34.99,
  },
  {
    id: 5,
    product: "Iphone 13",
    img: img2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo",
    price: 1299.99,
  },
  {
    id: 6,
    product: "Gaming PC Low Bugdet",
    img: img3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo",
    price: 399.99,
  },
];

const Products = () => {
  return (
    <div className="grid grid-cols-1 gap-5 m-auto max-w-7xl md:grid-cols-2 xl:grid-cols-3 p-4 place-items-center pt-32">
      {products.map((item) => {
        return (
          <Card
            id={item.id}
            key={item.id}
            product={item.product}
            img={item.img}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Products;
