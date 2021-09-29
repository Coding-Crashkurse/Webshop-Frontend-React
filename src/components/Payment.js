import React from "react";
import SplitForm from "./StripeContainer";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";

const Payment = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const paymentHandler = (state) => {
    if (state) {
      setSuccess(true);
      setError(false);
    } else {
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <div className="mt-36 m-auto w-full max-w-xl p-4 shadow-md">
      {!success ? (
        <div>
          {" "}
          <CheckoutForm /> <SplitForm onPayment={paymentHandler} />
        </div>
      ) : (
        ""
      )}

      {success ? (
        <h1 className="text-green-600 text-bold text-xl bg-gray-200 p-2 mt-2">
          Payment was sucessful
        </h1>
      ) : (
        ""
      )}
      {error ? (
        <h1 className="text-red-700 text-bold text-xl bg-gray-200 p-2 mt-2">
          Error during payment, please check credit information
        </h1>
      ) : (
        ""
      )}
    </div>
  );
};

export default Payment;
