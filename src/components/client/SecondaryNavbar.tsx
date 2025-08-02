import React from "react";

const SecondaryNavbar = () => {
  return (
    <React.Fragment>
      <main>
        <nav className=" relative flex flex-col sm:flex-row py-3 bg-indigo-400 text-white justify-between items-center space-x-2 space-y-2">
          <div>{"name"}</div>
          <span className=" absolute top-0 right-2 pt-4 sm:hidden">➕</span>
          <ul className=" justify-around gap-6 px-4 hidden sm:flex ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <section className=" flex flex-col sm:flex-row min-h-screen">
          <aside className=" flex flex-col justify-between bg-slate-600">
            <ul className="sm:w-[180px] bg-indigo-500 space-y-3.5 text-start ps-4 py-2 w-full">
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
            <ul className="sm:w-[180px] bg-indigo-500 space-y-3.5 text-start ps-4 py-2 w-full">
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </aside>
          <main className=" p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              officia expedita molestias magnam vitae? Neque saepe sequi dicta
              facilis quod, molestias dignissimos tempora et eveniet dolorem
              perspiciatis nesciunt modi cum.
            </p>
          </main>
        </section>
        <footer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            sequi dolor possimus!
          </p>
        </footer>
      </main>
    </React.Fragment>
  );
};

export default SecondaryNavbar;
