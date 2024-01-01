import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log("Login clicked");
  };
  return (
    <div>
      <div className="bg-gray-400 text-center py-24">
        <h1 className="text-5xl font-bold text-black">Registration Page</h1>
        <div className="uppercase flex flex-wrap mx-auto justify-center items-center py-9 text-xl">
          <Link to="/" className="text-white mr-5">
            Home
          </Link>
          <h3 className="text-blue-700">// Registration</h3>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
          <div className="flex justify-center py-4 text-xl">
            <p className="mr-5 text-blue-500">Login</p> ||
            <p className="ml-5"> Registration</p>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 p-3 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 p-3 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={handleLogin}
                className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
