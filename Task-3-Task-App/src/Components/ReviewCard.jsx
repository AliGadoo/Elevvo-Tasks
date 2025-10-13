import React from "react";

const ReviewCard = ({ message, name }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <div className="flex items-start mb-4">
        <div>
          <p className="text-gray-600 italic leading-relaxed">"{message}"</p>
          <p className="font-semibold text-sky-950 mt-2">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
