import FriendCard from "./FriendCard";
import friends from "./friends.json";

const FriendList = () => {
  return (
    <ul className="friend-list">
      {friends.map((el) => {
        return (
          <FriendCard
            key={el.id}
            statusIsOnline={el.statusIsOnline}
            avatar={el.avatar}
            name={el.name}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;