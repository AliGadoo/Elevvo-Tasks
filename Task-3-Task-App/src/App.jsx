import React from "react";
import FeatureCard from "./Components/FeatureCard";
import taskManagerIcon from "/taskManagerIcon.svg";
import calendarIcon from "/calendar.svg";
import usersIcon from "/users.svg";

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
      <main className="max-w-7xl mx-auto flex justify-center px-4">
        <div className="mt-16">
          <h2 className="text-xl font-semibold text-center mb-8">
            Why TaskFlow?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={taskManagerIcon}
              title={"Organize Tasks"}
              desc={"Organize tasks quickly and simply"}
            />
            <FeatureCard
              icon={calendarIcon}
              title={"Calendar View"}
              desc={"Keep track of tasks by date"}
            />
            <FeatureCard
              icon={usersIcon}
              title={"Work Together"}
              desc={"Organize tasks quickly and simply"}
            />
          </div>
        </div>
      </main>
      {/* <!-- Team Collaboration --> */}

      {/* Keep track of tasks by date */}
      <footer></footer>
    </div>
  );
};

export default App;
