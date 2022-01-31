import "./App.css";
import FriendList from "./components/FriendList/FriendList";
import UserProfile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/statistics";

function App() {
  return (
    <>
      <UserProfile />
      <Statistics />
      <FriendList />
    </>
  );
}

export default App;
