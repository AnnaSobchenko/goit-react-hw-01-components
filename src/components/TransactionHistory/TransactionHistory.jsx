import TransitionHistoryItem from "./TransactionHistoryItem";
import transactions from "./transactions.json";
import s from './TransactionHistory.module.scss'

const TransactionHistory = () => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((el) => {
          return (
            <TransitionHistoryItem
              key={el.id}
              type={el.type}
              amount={el.amount}
              currency={el.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};
 export default TransactionHistory;