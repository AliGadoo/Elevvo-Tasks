const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="min-w-[280px] text-center bg-white shadow-lg rounded-2xl p-8 transform transition-transform duration-300 hover:translate-y-2 ">
      <div className="flex justify-center mb-6">
        <div>
          <img
            src={icon}
            alt={`icon for ${title}`}
            className="w-10 h-10 text-sky-600"
          />
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-sky-950">{title}</h2>
      <p className="text-base text-gray-600 mt-4 leading-relaxed">{desc}</p>
    </div>
  );
};

export default FeatureCard;
