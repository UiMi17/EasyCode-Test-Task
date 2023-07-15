const TransactionsList = ({ transactions }) => {
  return (
    <>
      <h1>Ваші транзакції</h1>
      <ul style={{ listStyle: "none" }}>
        {/* <li>
          <h3>Назва транзакції</h3>
          <p>Сума: 11221</p>
          <p>Тип: Дохід</p>
          <button type="button">Редагувати</button>
          <button type="button">Видалити</button>
          <time dateTime="2023-07-15T13:24:00">15.07.2023, 13:24</time>
        </li> */}
        {transactions.map(({ name, sum, transaction, id }) => {
          return (
            <li key={id}>
              <h3>{name}</h3>
              <p>Сума: {sum}</p>
              <p>Тип: {transaction}</p>
              <button type="button">Редагувати</button>
              <button type="button">Видалити</button>
              <time dateTime="2023-07-15T13:24:00">15.07.2023, 13:24</time>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TransactionsList;
