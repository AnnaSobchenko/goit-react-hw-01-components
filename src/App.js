import "./App.css";
import FriendList from "./components/FriendList/FriendList";
import UserProfile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <UserProfile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </>
  );
}

export default App;
