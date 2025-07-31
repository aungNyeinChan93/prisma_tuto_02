import React from "react";
import { readFileContent, writeFileContent } from "@/helpers/server-helpers";

const TestReadFile = async () => {
  const result = await readFileContent("./test.txt");
  writeFileContent("./test2.txt", JSON.stringify(result, null, 2));
  console.log(result);

  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default TestReadFile;
