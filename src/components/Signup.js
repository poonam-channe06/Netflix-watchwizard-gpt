import { useState } from "react";
import Header from "./Header";

const Signup = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInFrom);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg" />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-3xl text-cyan-50 py-4">
          {isSignInFrom ? "Sign in" : "Sign up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700   rounded-md"
        />

        {!isSignInFrom && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-3 w-full  bg-gray-700  rounded-md"
        />}

        <input
          type="text"
          placeholder="Password"
          className="p-4 my-3 w-full  bg-gray-700  rounded-md"
        />

        <button className="p-4 my-3 bg-red-700 w-full rounded-md">
          {isSignInFrom ? "Sign in" : "Sign up"}
        </button>
        {/* <h1 className="font-thin text-xl text-cyan-50 py-4 text-center">OR</h1>
        <button className="p-4 my-1 bg-gray-800 w-full rounded-md text-white">
          Use a Sign-in Code{" "}
        </button> */}
        <p
          className="py-2 text-cyan-50 text-center cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInFrom
            ? "New to Netflix? Sign Up now"
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Signup;
