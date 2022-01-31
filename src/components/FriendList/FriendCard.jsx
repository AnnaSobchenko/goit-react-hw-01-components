import PropTypes from "prop-types";

const FriendCard = (props) => {
  const { statusIsOnline, avatar, name } = props;

  return (
    <li className="item">
      <span className="status">{statusIsOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendCard.propTypes = {
  statusIsOnline: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendCard;
