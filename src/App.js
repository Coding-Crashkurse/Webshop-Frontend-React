import Products from "./components/Products";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import logo from "./images/logo.png";
import Cart from "./components/Cart";
import CardCounter from "./components/CardCounter";
import Home from "./components/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SplitForm from "./components/StripeContainer";
import { AnimatePresence, motion } from "framer-motion";

const stripePromise = loadStripe(
  "pk_test_51Je0RtHYfgsmREY9CgihgUBwHEMCdRO4zoonPGy5G8XGG5E17JEzwD6CGJyJdl9QtBpcNLGqzLViQXE3X6aO8ky9007lpq05rE"
);

function App() {
  let location = useLocation();

  return (
    <div>
      <nav className="flex justify-between bg-gray-700 fixed top-0 w-full z-50">
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

      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Products />
            </motion.div>
          </Route>
          <Route path="/cart">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Cart />
            </motion.div>
          </Route>
          <Route path="/payment">
            <Elements stripe={stripePromise}>
              <SplitForm />
            </Elements>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
