import React from "react";
import FeatureCard from "./Components/FeatureCard";
import ReviewCard from "./Components/ReviewCard";
import PricingCard from "./Components/PricingCard"; // Import the new component
import taskManagerIcon from "/taskManagerIcon.svg";
import calendarIcon from "/calendar.svg";
import usersIcon from "/users.svg";

const App = () => {
  return (
    <div className="bg-gray-50">
      <header className="sm:min-h-screen bg-sky-950 text-white text-center py-32 sm:py-0 flex justify-center sm:items-center">
        <div className="max-w-7xl px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Organize Your Life with{" "}
            <span className="text-cyan-400">TaskFlow</span>
          </h1>
          <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
            Organize your tasks, collaborate with others, and boost your
            productivity with a simple, powerful, and intuitive platform.
          </p>
          <button className="btn-primary mt-8 bg-sky-500 hover:bg-sky-600 focus:ring-sky-500">
            Get Started
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-sky-950">
            Why TaskFlow?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <FeatureCard
              icon={taskManagerIcon}
              title={"Organize Tasks"}
              desc={
                "Effortlessly manage your daily to-dos and projects with a simple, intuitive interface."
              }
            />
            <FeatureCard
              icon={calendarIcon}
              title={"Calendar View"}
              desc={
                "Visualize your schedule and deadlines in a clean, comprehensive calendar view."
              }
            />
            <FeatureCard
              icon={usersIcon}
              title={"Collaborate Seamlessly"}
              desc={
                "Work with your team on shared projects and stay aligned with ease."
              }
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-sky-950">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReviewCard
              message="This app is great for managing my tasks."
              name="Ali"
            />
            <ReviewCard
              message="I love how organized I feel now."
              name="Ahmed"
            />
            <ReviewCard
              message="Perfect for team collaboration."
              name="Mohamed"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-sky-950">
            Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="Free"
              price="$0"
              features={[
                "5 active projects",
                "Basic task management",
                "Email support",
                "Community access",
              ]}
            />
            <PricingCard
              title="Pro"
              price="$15"
              features={[
                "Unlimited projects",
                "Advanced analytics",
                "Priority support",
                "Calendar sync",
              ]}
              isFeatured={true}
            />
            <PricingCard
              title="Team"
              price="$50"
              features={[
                "Unlimited projects",
                "Advanced analytics",
                "24/7 priority support",
                "Team collaboration tools",
              ]}
            />
          </div>
        </div>
      </main>

      <footer className="bg-sky-950 text-white py-8 text-center">
        <p>&copy; 2025 TaskFlow</p>
      </footer>
    </div>
  );
};

export default App;
