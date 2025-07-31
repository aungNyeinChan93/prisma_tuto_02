import Link from "next/link";
import React from "react";

const TaskPage = async () => {
  const { todos } = await fetch(`https://dummyjson.com/todos`).then((res) =>
    res.json()
  );
  console.log(todos);

  return (
    <React.Fragment>
      <main className="w-3/5 mx-auto min-h-screen">
        <div className="my-4 min-h-screen bg-slate-100 p-10 ">
          <div className="flex  justify-between items-center px-4">
            <h3 className="font-mono text-slate-900 text-2xl font-semibold  underline underline-offset-4 decoration-amber-600">
              Tasks
            </h3>
            <Link
              className="text-indigo-600 underline underline-offset-4 "
              href={"/dashboard"}
            >
              Go Back
            </Link>
          </div>
          {todos &&
            Array.isArray(todos) &&
            todos?.map((todo) => (
              <div
                key={todo.id}
                className={`p-8 bg-slate-200 rounded-2xl my-2 border-4 border-red-600 text-black ${
                  todo.completed ? "!border-green-500" : ""
                }`}
              >
                {todo.todo}
              </div>
            ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export default TaskPage;
