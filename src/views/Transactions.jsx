import TransactionsForm from "../components/TransactionsForm";
import TransactionsList from "../components/TransactionsList";
import TransactionsStats from "../components/TransactionsStats";

const Transactions = ({
  createTransaction,
  transactions,
  transactionsStats,
}) => {
  return (
    <>
      <TransactionsForm createTransaction={createTransaction} />
      <TransactionsStats transactionsStats={transactionsStats} />
      <TransactionsList transactions={transactions} />
    </>
  );
};

export default Transactions;
