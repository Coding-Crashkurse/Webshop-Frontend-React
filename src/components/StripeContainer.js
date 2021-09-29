import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import useResponsiveFontSize from "./useResponsiveFontSize";
import { useContext } from "react";
import Warenkorb from "../store/store";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const SplitForm = ({ onPayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const ctx = useContext(Warenkorb);

  const totalsum =
    ctx.waren.length > 0
      ? parseFloat(
          ctx.waren
            .map((item) => item.price)
            .reduce((prev, next) => prev + next)
        ).toFixed(2)
      : 0;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (!payload.error) {
      onPayment(true);
      ctx.onRemoveAll();
    } else {
      onPayment(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <div className="flex justify-between">
        <button
          type="submit"
          disabled={!stripe}
          className="py-2 px-4 text-white bg-gray-700 hover:bg-gray-900 rounded font-semibold uppercase mt-2"
        >
          Pay {totalsum}€
        </button>
        <NavLink
          to="/cart"
          className="text-white bg-gray-700 hover:bg-gray-900 py-2 font-semibold rounded px-6 mt-2"
          activeClassName="text-brandcol"
          exact
        >
          <FontAwesomeIcon icon={faAngleLeft} className="mx-2" />
          Zurück
        </NavLink>
      </div>
    </form>
  );
};

export default SplitForm;
