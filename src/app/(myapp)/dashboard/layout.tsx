import React, { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = async ({
  children,
}) => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen  justify-center items-center ">
        {children}
      </main>
    </React.Fragment>
  );
};

export default DashboardLayout;
