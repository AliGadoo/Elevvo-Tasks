const PricingCard = ({ title, price, features }) => {
  return (
    <div
      className="
        flex flex-col rounded-3xl p-8 shadow-xl bg-white text-gray-950
        border border-gray-200 hover:border-sky-500
        transform transition-all duration-300
      "
    >
      <h3 className="text-2xl font-bold mb-4 text-sky-950">{title}</h3>
      <div className="flex items-baseline mb-6">
        <span className="text-5xl font-extrabold text-sky-950">{price}</span>
        <span className="ml-1 text-xl font-semibold text-gray-600">/mo</span>
      </div>
      <ul className="flex-1 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="h-6 w-6 mr-2 text-sky-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className="
          mt-8 w-full py-3 rounded-lg font-semibold bg-sky-500 text-white
          hover:bg-sky-600 transition-colors duration-300
        "
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
