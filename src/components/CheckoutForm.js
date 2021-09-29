import React from "react";

const CheckouthtmlForm = () => {
  return (
    <div>
      <div className="">
        <label className="block text-sm text-gray-00" htmlFor="cus_name">
          Name
        </label>
        <input
          className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
          id="cus_name"
          name="cus_name"
          type="text"
          required=""
          placeholder="Your Name"
          aria-label="Name"
        />
      </div>
      <div className="mt-2">
        <label className="block text-sm text-gray-600" htmlFor="cus_email">
          Email
        </label>
        <input
          className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
          placeholder="Your Email"
          aria-label="Email"
        />
      </div>
      <div className="mt-2">
        <label className=" block text-sm text-gray-600" htmlFor="cus_email">
          Address
        </label>
        <input
          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
          placeholder="Street"
          aria-label="Email"
        />
      </div>
      <div className="mt-2">
        <label className="text-sm block text-gray-600" htmlFor="cus_email">
          City
        </label>
        <input
          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
          placeholder="City"
          aria-label="Email"
        />
      </div>
      <div className="inline-block mt-2 w-1/2 pr-1">
        <label className="block text-sm text-gray-600" htmlFor="cus_email">
          Country
        </label>
        <input
          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
          placeholder="Country"
          aria-label="Email"
        />
      </div>
      <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
        <label className="block text-sm text-gray-600" htmlFor="cus_email">
          Zip
        </label>
        <input
          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
          placeholder="Zip"
          aria-label="Email"
        />
      </div>
    </div>
  );
};

export default CheckouthtmlForm;
