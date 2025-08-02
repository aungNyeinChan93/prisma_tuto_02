import TestReadFile from "@/components/server/TestReadFile";
import TestRouter from "@/components/server/TestRouter";
import Link from "next/link";
import React from "react";
import { Bebas_Neue, ABeeZee } from "next/font/google";

const bebasNenuFont = Bebas_Neue({
  weight: "400",
  display: "auto",
  subsets: ["latin"],
  style: "normal",
});

const abeezeeFont = ABeeZee({
  weight: "400",
  subsets: ["latin"],
});

const Home = async () => {
  return (
    <React.Fragment>
      <main className="min-h-screen flex flex-col justify-center items-center space-y-4 p-8">
        <div className="text-center">
          <div className="text-4xl text-indigo-500 font-bold font-mono ">
            Welcome
          </div>
          <p className={`${abeezeeFont.className} text-5xl`}>Hello World</p>
        </div>
        <div className="text-center">
          <p className={`text-2xl ${bebasNenuFont.className}`}>
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
          <TestRouter to="/dashboard/tasks" />
          <TestRouter to="/dashboard/other" />

          <TestReadFile />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
