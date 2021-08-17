import styles from './TransactionHistory.module.css';


function firstLetter(string) {
  let newStr = string[0].toUpperCase() + string.slice(1);
  return newStr;
}
export default function  TransactionHistory ({ items })  {
  return (
    <div className={styles.historyTable}>
     <table className={styles.transactionTable}>
      <thead>
        <tr className={styles.Header}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className={styles.tableEl} key={item.id}>
            <td className={styles.type}>{firstLetter(item.type)}</td>
            <td>{item.amount}</td>
            <td className={styles.type_cur}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};



TransactionHistory.defaultProps = {
  type: "Type not found",
  currency: "Currency type not found",
};

