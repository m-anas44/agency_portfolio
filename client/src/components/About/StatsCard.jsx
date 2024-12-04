const StatsCard = ({ value, description }) => (
  <div className="text-center">
    <h3 className="text-4xl sm:text-5xl font-bold text-teal-500">{value}</h3>
    <p className="text-lg text-gray-600">{description}</p>
  </div>
);

export default StatsCard;
