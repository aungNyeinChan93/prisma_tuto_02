"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { urlToName } from "@/helpers/client-helper";

const TestRouter = ({ to = "#" }: { to: string }) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <main className="mt-4">
        <button type="button" onClick={() => router.push(to)}>
          {urlToName(to)}
        </button>
      </main>
    </React.Fragment>
  );
};

export default TestRouter;
