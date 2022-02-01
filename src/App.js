import "./App.css";
import FriendList from "./components/FriendList/FriendList";
import UserProfile from "./components/Profile/Profile";
import { ContainerStyled } from "./components/shared/Container.styled";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <ContainerStyled>
      <UserProfile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </ContainerStyled>
  );
}

export default App;
