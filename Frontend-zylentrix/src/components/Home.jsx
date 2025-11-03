import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-yellow-100">
      {/* Navbar */}
      <nav className="bg-indigo-100 shadow-md fixed w-full">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-orange-400">Zylentrix</h1>
          <div className="space-x-6 text-gray-700 font-medium">
            <button
              onClick={() => navigate("/")}
              className="hover:text-blue-600 transition text-2xl cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/login")}
              className="hover:text-blue-600 transition text-2xl cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="hover:text-blue-600 transition text-2xl cursor-pointer"
            >
              Signup
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-32">
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            Manage Your Tasks <span className="text-blue-600">Efficiently</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Stay organized and boost productivity with your personal task
            management system. Track progress, set goals, and collaborate
            effortlessly.
          </p>
          <div className="space-x-4 mt-4">
            <button
              onClick={() => navigate("/signup")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/login")}
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 mt-10 md:mt-0">
          <img
            src="/src/assets/home-img.jpg"
            alt="Task management illustration"
            className="rounded-xl shadow-lg w-90"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
