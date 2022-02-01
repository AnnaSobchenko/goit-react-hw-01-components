import PropTypes from "prop-types";
import {StatusStyled} from './FriendList.styled.js'
import s from './FriendList.module.scss'

const FriendCard = (props) => {
  const { statusIsOnline, avatar, name } = props;

  return (
    <li className={s.item}>
      <StatusStyled statusIsOnline={statusIsOnline} ></StatusStyled>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendCard.propTypes = {
  statusIsOnline: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendCard;
