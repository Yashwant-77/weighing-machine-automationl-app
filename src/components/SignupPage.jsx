// import React from "react";

// function SignupPage() {
//   return (
//     <div className="signupPage mt-4">
//       <h1 className="text-2xl">Fill your details</h1>
//       <form>
//         <label htmlFor="firstname">First Name : </label>
//         <input type="text" id="firstname" />

//         <br />
//         <label htmlFor="lastname">Last Name : </label>
//         <input type="text" id="lastname" />

//         <br />

//         <label htmlFor="mobileNo">Mobile No. : </label>
//         <input type="number" id="mobileNo" />

//         <br />
//         <label htmlFor="truckNo">Truck No. : </label>
//         <input type="alpha-numeric" id="truckNo" />

//         <br />

//         <button
//           type="submit"
//           className="bg-black text-white rounded-sm px-2 p-2 my-2"
//           //   onClick={(e) => e.preventDefault()}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default SignupPage;

import React from "react";
import Navbar from "./Navbar";

function SignupPage() {
  return (
    <>
      <Navbar
        items={[
          ["Calculate", "./calculate"],
          ["About Us", "./about-us"],
          ["Your Details", "./your-details"],
        ]}
      />
      <div className="signupPage  flex flex-col items-center justify-center p-4 bg-gray-50">
        <h1 className="text-3xl font-semibold mb-6">Fill in Your Details</h1>
        <form className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstname"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastname"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="mobileNo"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile No.:
            </label>
            <input
              type="tel"
              id="mobileNo"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="truckNo"
              className="block text-sm font-medium text-gray-700"
            >
              Truck No.:
            </label>
            <input
              type="text"
              id="truckNo"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className=" bg-blue-600 text-white rounded-md px-4 py-2 mt-4 "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SignupPage;
