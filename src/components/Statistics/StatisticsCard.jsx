import ProtoTypes from "prop-types";

const StatisticsCard = (props) => {
  const { label, percentage } = props;

  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};
StatisticsCard.protoTypes = {
  label: ProtoTypes.string,
  percentage: ProtoTypes.string,
};

export default StatisticsCard;
