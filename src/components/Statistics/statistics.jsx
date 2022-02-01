import data from "./data.json";
import StatisticsCard from "./StatisticsCard";
import s from './Statistics.module.scss'
const Statistics = () => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
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
