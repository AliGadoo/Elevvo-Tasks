import React from "react";

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col items-center ">
      <div>
        <img src={icon} alt={`icon for ${title}`} />
      </div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default FeatureCard;
