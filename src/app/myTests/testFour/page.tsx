import React from "react";
import SVG from "../../../../public/window.svg";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TestFour = async ({ searchParams }: { searchParams: Promise<any> }) => {
  const array = ["mgmg", "aung"];
  const testStr = new String("hello world!");
  const { movies } = await fetch("http://localhost:3000/api/movies").then(
    (res) => res.json()
  );

  const { name, email } = await searchParams;
  console.log({ name, email });

  return (
    <React.Fragment>
      <main>
        {JSON.stringify(array, null, 2)}
        {testStr.toUpperCase()}
        <Image
          className="w-100 border-8 rounded-2xl border-y-amber-500"
          src={SVG}
          alt="svg"
        />
        <Image
          src={
            "https://images.unsplash.com/photo-1753807971479-5a51e1445b78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
          }
          width={600}
          height={600}
          alt="external Image"
        />
        {movies &&
          Array.isArray(movies) &&
          movies?.map((movie) => (
            <div key={movie.id}>
              {movie.title} - {movie.director}
            </div>
          ))}
      </main>
    </React.Fragment>
  );
};

export default TestFour;
