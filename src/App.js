import Products from "./components/Products";
import { Switch, Route, NavLink } from "react-router-dom";
import logo from "./images/logo.png";
import Cart from "./components/Cart";
import CardCounter from "./components/CardCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Warenkorb from "./store/store";
import { useContext } from "react";

function App() {
  const ctx = useContext(Warenkorb);

  return (
    <div>
      <nav className="flex justify-between bg-gray-700 fixed top-0 w-full">
        <img src={logo} width="125px"></img>
        <ul className="flex px-4 justify-center items-center text-xl text-white">
          <li>
            <NavLink
              to="/"
              className="p-4"
              activeClassName="text-brandcol"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="p-4"
              activeClassName="text-brandcol"
              exact
            >
              Products
            </NavLink>
          </li>
          <li className="relative">
            <CardCounter />
            <NavLink
              to="cart"
              className="p-4"
              activeClassName="text-brandcol"
              exact
            >
              <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
