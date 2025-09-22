import React from "react";
import FeatureCard from "./Components/FeatureCard";
import taskManagerIcon from "/taskManagerIcon.svg";

const App = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <header className="bg-gradient-to-br from-emerald-500 to-cyan-500 text-gray-50 text-center py-24">
        <h1 className="text-4xl font-extrabold">TaskFlow</h1>
        <p className="text-xl text-gray-50/85 mt-4">
          Organize your tasks and boost your productivity
        </p>
        <button className="btn-primary mt-4">Get Started</button>
      </header>
      <main>
        <FeatureCard
          icon={taskManagerIcon}
          title={"Easy Task Management"}
          desc={"Organize tasks quickly and simply"}
        />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
