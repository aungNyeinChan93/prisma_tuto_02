import TestReadFile from "@/components/server/TestReadFile";
import TestRouter from "@/components/server/TestRouter";
import Link from "next/link";
import React from "react";

const Home = async () => {
  return (
    <React.Fragment>
      <main className="min-h-screen flex flex-col justify-center items-center space-y-4 p-8">
        <div className="text-center">
          <div className="text-4xl text-indigo-500 font-bold font-mono ">
            Welcome
          </div>
        </div>
        <div className="text-center">
          <p className="text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            reiciendis necessitatibus fugit?
          </p>
        </div>
        <div className="text-center">
          <Link
            href={"/dashboard"}
            className="px-4 py-2 bg-green-600 my-2 rounded-lg"
          >
            Dashboard
          </Link>
          <TestRouter to="/dashboard" />
          <TestRouter to="/dashboard/test" />
          <TestRouter to="/dashboard/other" />

          <TestReadFile />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
