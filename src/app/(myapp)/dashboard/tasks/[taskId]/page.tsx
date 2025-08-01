import React from "react";

interface DetailTaskProps {
  params: Promise<{
    taskId: string;
  }>;
  searchParams: Promise<{
    query: string;
  }>;
}

const DetailTask: React.FC<DetailTaskProps> = async ({
  params,
  searchParams,
}) => {
  console.log({ params: await params, searchParams: await searchParams });

  return (
    <React.Fragment>
      <main>{JSON.stringify(await params, null, 2)}</main>
      <main>{JSON.stringify(await searchParams, null, 2)}</main>
    </React.Fragment>
  );
};

export default DetailTask;
