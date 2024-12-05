const StatsCard = ({ value, description }) => (
  <div className="text-center ">
    <h3 className="text-4xl font-bold text-secondary sm:text-5xl">{value}</h3>
    <p className="text-lg text-tertiary">{description}</p>
  </div>
);

export default StatsCard;
