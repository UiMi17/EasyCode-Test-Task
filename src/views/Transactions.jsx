import TransactionsForm from "../components/TransactionsForm";
import TransactionsList from "../components/TransactionsList";
import TransactionsStats from "../components/TransactionsStats";
import TransactionsModal from "../components/TransactionsModal";

const Transactions = ({
  createTransaction,
  transactions,
  transactionsStats,
  getCurrentDate,
  getCurrentTime,
  toggleModal,
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
      <TransactionsModal toggleModal={toggleModal} />
    </>
  );
};

export default Transactions;
