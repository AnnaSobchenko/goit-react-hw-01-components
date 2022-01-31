import data from "./data.json";
import StatisticsCard from "./StatisticsCard";

const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {data.map((el) => {
          return (
            <StatisticsCard
              key={el.id}
              label={el.label}
              percentage={el.percentage}
            />
          );
        })}
      </ul>      
    </section>
  );
};
export default Statistics;
