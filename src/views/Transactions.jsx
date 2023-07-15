import TransactionsForm from "../components/TransactionsForm";
import TransactionsList from "../components/TransactionsList";
import TransactionsStats from "../components/TransactionsStats";

const Transactions = ({
  createTransaction,
  transactions,
  transactionsStats,
  getCurrentDate,
  getCurrentTime,
}) => {
  return (
    <>
      <TransactionsForm createTransaction={createTransaction} />
      <TransactionsStats transactionsStats={transactionsStats} />
      <TransactionsList
        transactions={transactions}
        getCurrentDate={getCurrentDate}
        getCurrentTime={getCurrentTime}
      />
    </>
  );
};

export default Transactions;
