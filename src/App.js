import {
  addTransaction,
  updateStatsCost,
  updateStatsIncome,
} from "./redux/transactionsSlice";
import Transactions from "./views/Transactions";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  selectTransactions,
  selectTransactionsStatistic,
} from "./redux/transactionsSelectors";

function App() {
  const dispatch = useDispatch();

  const transactions = useSelector(selectTransactions);
  const transactionsStats = useSelector(selectTransactionsStatistic);

  const createTransaction = (values) => {
    const { name, sum, transaction } = values;

    dispatch(
      addTransaction({
        name,
        sum,
        transaction: checkTransactionType(transaction),
        id: nanoid(),
      })
    );

    switch (checkTransactionType(transaction)) {
      case "Дохід":
        dispatch(updateStatsIncome(Number(sum)));
        break;

      case "Витрата":
        dispatch(updateStatsCost(Number(sum)));
        break;

      default:
        break;
    }
  };

  const checkTransactionType = (transaction) => {
    const checkedTransaction =
      transaction.toLowerCase() === "income" ? "Дохід" : "Витрата";
    return checkedTransaction;
  };

  return (
    <Transactions
      createTransaction={createTransaction}
      transactions={transactions}
      transactionsStats={transactionsStats}
    />
  );
}

export default App;
