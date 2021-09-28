import React from "react";
import background from "../images/background.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <div
        style={{
          background: `url('${background}') no-repeat center center fixed`,
          backgroundSize: "cover",
          filter: "grayscale(100%)",
        }}
        className="h-screen relative"
      ></div>
      <div>
        <NavLink
          to="/products"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded  border-white border-2 px-10 py-4 text-4xl text-white bg-gray-700 hover:bg-gray-900"
          activeClassName="text-brandcol"
          exact
        >
          Zu den Produkten
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Home;
