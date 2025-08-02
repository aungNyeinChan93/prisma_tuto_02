import Navbar from "@/components/client/Navbar";
import React, { ReactNode } from "react";

const AppLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <main>
        <Navbar />
        {children}
      </main>
    </React.Fragment>
  );
};

export default AppLayout;
