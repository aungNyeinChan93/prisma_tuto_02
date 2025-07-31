import TaskCard from "@/components/client/TaskCard";
import React from "react";

const Dashboard = async () => {
  return (
    <React.Fragment>
      <main className="w-4/5  mx-auto min-h-screen flex flex-col justify-start items-center space-y-4 p-8">
        <div className="text-center">
          <div className="text-4xl text-indigo-500 font-bold font-mono ">
            Welcome to Dashboard
          </div>
        </div>
        <div className="text-center">
          <p className="text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            reiciendis necessitatibus fugit?
          </p>
        </div>
        <div className="grid gris-cols-1 sm:grid-cols-4 gap-8 my-2">
          <TaskCard to="/dashboard/tasks" title="Todo tasks " emoji="📃" />
          <TaskCard title="Todo Tasks " emoji="😺" />
          <TaskCard title="Lorem ipsum dolor sit, a" emoji="😺" />
          <TaskCard
            title="Lorem iLoremLoremLorem psum dolor sit, a"
            emoji="🚫"
          />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Dashboard;
