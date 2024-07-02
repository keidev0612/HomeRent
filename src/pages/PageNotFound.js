import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="bg-white shadow-md rounded w-96 px-8 pt-6 pb-8 mt-20 mb-20">
        <div className="text-center text-2xl font-bold text-cyan-500">404</div>
        <div className="text-center text-xl font-bold text-gray-700 mt-4">Page Not Found</div>
        <div className="text-center mt-6">
          <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
