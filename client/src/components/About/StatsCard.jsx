const StatsCard = ({ value, description }) => (
  <div className="text-center flex-grow bg-tertiary p-3 rounded-lg">
    <h3 className="text-4xl font-bold text-secondary sm:text-5xl">{value}</h3>
    <p className="text-lg text-secondary">{description}</p>
  </div>
);

export default StatsCard;
