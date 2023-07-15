const TransactionsStats = ({ transactionsStats }) => {
  const { balance, income, cost } = transactionsStats;
  return (
    <>
      <h2>Баланс: {balance}&#8372;</h2>
      <h2>Дохід: {income}&#8372;</h2>
      <h2>Витрати: {cost}&#8372;</h2>
    </>
  );
};

export default TransactionsStats;
