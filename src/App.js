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
        date: getFormattedDate(),
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

  function getFormattedDate() {
    const rawDate = new Date();

    const currentDate = getCurrentDate(rawDate);

    const currentTime = getCurrentTime(rawDate);

    const formattedDate = `${currentDate.currentYear}-${currentDate.currentMonth}-${currentDate.currentDay}T${currentTime}`;
    return formattedDate;
  }

  function getCurrentDate(rawDate) {
    const currentYear = rawDate.getFullYear();
    const currentMonth = (rawDate.getMonth() + 1).toString().padStart(2, "0");
    const currentDay = rawDate.getDate().toString().padStart(2, "0");

    return {
      currentYear,
      currentMonth,
      currentDay,
    };
  }

  function getCurrentTime(rawDate) {
    const currentTime = rawDate.toLocaleTimeString("en-US", {
      hour12: false,
    });
    return currentTime;
  }

  return (
    <Transactions
      createTransaction={createTransaction}
      transactions={transactions}
      transactionsStats={transactionsStats}
      getCurrentDate={getCurrentDate}
      getCurrentTime={getCurrentTime}
    />
  );
}

export default App;
