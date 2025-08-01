import React from "react";

const TaskSlugPage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  console.log(await params);

  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(slug, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default TaskSlugPage;
