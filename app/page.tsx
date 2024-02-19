import { ModeToggle } from "@/components/mode-toggle";
import React from "react";

const Home = () => {
  return (
    <main className="h-screen border flex">
      <div className="h-screen w-1/4 border container flex justify-center">
        <div className="rounded-full size-64 border mt-20 profile"></div>
        {/* <div className="size-64 border"></div>
        <div className="size-64 border"></div>
        <div className="size-64 border"></div> */}
      </div>
      <div className="h-screen w-3/4 border">
        <ModeToggle />
      </div>
    </main>
  );
};

export default Home;
