const TransactionsList = ({ transactions, getCurrentDate, getCurrentTime }) => {
  return (
    <>
      <h1>Ваші транзакції</h1>
      <ul style={{ listStyle: "none" }}>
        {transactions.map(({ name, sum, transaction, date, id }) => {
          return (
            <li key={id}>
              <h3>{name}</h3>
              <p>Сума: {sum}</p>
              <p>Тип: {transaction}</p>
              <button type="button">Редагувати</button>
              <button type="button">Видалити</button>
              <time dateTime={date}>
                {date.substring(0, 10)}, {date.substring(11, 16)}
              </time>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TransactionsList;
