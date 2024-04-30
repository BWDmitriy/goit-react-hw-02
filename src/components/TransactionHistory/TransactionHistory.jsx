import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
        {transactions.map((transaction,index) => <TransactionHistoryItem index={index} key={transaction.id} type={transaction.type} amount={transaction.amount} currency={transaction.currency} />)}
  </tbody>
</table>
  );
};

export default TransactionHistory