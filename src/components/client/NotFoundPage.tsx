import Link from "next/link";
import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-50 px-4">
      <div className="text-center">
        {/* Oops text with gradient */}
        <h1 className="text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Oops!
        </h1>

        {/* 404 message */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          404 - PAGE NOT FOUND
        </h2>

        <p className="mt-2 text-gray-600">
          The page you are looking for might have been removed,
          <br />
          had its name changed, or is temporarily unavailable.
        </p>

        {/* Homepage button */}
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300"
        >
          GO TO HOMEPAGE
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
