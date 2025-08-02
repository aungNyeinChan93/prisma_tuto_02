"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";

const MyTestLayout = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");
  return (
    <React.Fragment>
      <main>
        <section>
          <input
            type="text"
            name="name"
            id=""
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </section>

        <ul>
          <li>
            <Link href={"/myTests/testOne"}>1</Link>
            <br />
            <Link href={"/myTests/testTwo"}>2</Link>
          </li>
        </ul>
        {children}
      </main>
    </React.Fragment>
  );
};

export default MyTestLayout;
