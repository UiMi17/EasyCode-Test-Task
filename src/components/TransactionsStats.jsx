const TransactionsStats = ({ transactionsStats }) => {
  const { balance, income, cost } = transactionsStats;
  return (
    <>
      <h2>Баланс: {balance}</h2>
      <h2>Дохід: {income}</h2>
      <h2>Витрати: {cost}</h2>
    </>
  );
};

export default TransactionsStats;
