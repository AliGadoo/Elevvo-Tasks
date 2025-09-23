const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="min-w-[280px] text-center bg-white shadow-xl rounded-xl p-8 hover:translate-y-[-4px] transition">
      <div className="flex justify-center mb-4">
        <img src={icon} alt={`icon for ${title}`} />
      </div>
      <h2 className="text-xl font-bold text-gray-950">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </div>
  );
};

export default FeatureCard;
