// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// function LoginPage() {
//   return (
//     <div className="loginPage">
//       <Navbar
//         items={[
//           ["Calculate", "./calculate"],
//           ["About Us", "./about-us"],
//           ["Your Details", "./your-details"],
//         ]}
//       />
//       <div className="login_form flex justify-center mt-5">
//         <div className="w-auto">
//           <div className="text-2xl">Enter your Username and Password</div>
//           <form className="text-xl">
//             <label htmlFor="username">Username :&nbsp;</label>
//             <input type="text" id="username" />

//             <br />

//             <label className="" htmlFor="password">
//               Password &nbsp;:&nbsp;
//             </label>
//             <input type="password" id="password" />

//             <br />

//             <Link to="./main-home">
//               <button
//                 className="bg-black rounded-sm p-1 px-2 mt-4 text-white"
//                 type="submit"
//               >
//                 Login
//               </button>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function LoginPage() {
  return (
    <div className="loginPage min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar
        items={[
          ["Calculate", "./calculate"],
          ["About Us", "./about-us"],
          ["Your Details", "./your-details"],
        ]}
      />

      {/* Login Form */}
      <div className="flex justify-center items-center mt-10">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Enter your Username and Password
          </h2>
          <form className="space-y-4 text-lg">
            {/* Username Input */}
            <div className="flex flex-col">
              <label htmlFor="username" className="font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col mt-4">
              <label htmlFor="password" className="font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Login Button */}
            <div className="text-center mt-6">
              <Link to="./main-home">
                <button
                  className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  type="submit"
                >
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
