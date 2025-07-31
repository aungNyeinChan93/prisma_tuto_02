import Link from "next/link";
import React from "react";

interface TaskCardProps {
  title?: string;
  emoji?: string;
  to?: string;
}

const TaskCard = async ({ title, emoji, to = "#" }: TaskCardProps) => {
  return (
    <React.Fragment>
      <main className="">
        <article className="rounded-[10px] border border-gray-200 bg-white px-4 pt-12 pb-4 ">
          <Link href={to}>
            <h3 className="mt-0.5 text-lg font-semibold font-mono text-gray-900">
              {title || "default title"}
            </h3>
          </Link>

          <div className="mt-4 flex flex-wrap gap-1">
            <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-base whitespace-nowrap text-purple-600">
              {emoji ?? "📃"}
            </span>
          </div>
        </article>
      </main>
    </React.Fragment>
  );
};

export default TaskCard;
