"use client";

import React from "react";

const TestThreeError = ({ error }: { error: Error }) => {
  return (
    <React.Fragment>
      <main>{error.message}</main>
      <main>{error.name}</main>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </React.Fragment>
  );
};

export default TestThreeError;
