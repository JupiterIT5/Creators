export default function Forum() {
  return (
    <div className="forum__container">
      <h2>Форум.</h2>
      <div className="comment__container">
        <div className="comment__container--card">
          <div className="comment">
            <h3>Где найти бисер не за оверпрайс?</h3>
            <p>Дано ищу сайт где закупить бисе, чем вы пользуетесь?</p>
          </div>
          <div className="user-comment">
            <h3>Медина Ванапова</h3>
          </div>
        </div>
        <div className="comment__container--card">
          <div className="comment">
            <h3>Хочу создать игру, но ничего не умею!</h3>
            <p>
              Есть крутая игра, но ее нет, хочу заколабиться с кодером. В ней
              можно грабить караваны!
            </p>
          </div>
          <div className="user-comment">
            <h3>Тамерлан</h3>
          </div>
        </div>
        <div className="comment__container--card">
          <div className="comment">
            <h3>Продам гараж</h3>
            <p>Гараж отопляемый, покрытие пола резиновое.</p>
          </div>
          <div className="user-comment">
            <h3>Брайан О`Коннор</h3>
          </div>
        </div>
        <div className="comment__container--card">
          <div className="comment">
            <h3>Нужен человек, который умеет клеить винил.</h3>
            <p>Занимаюсь поклейкой автомобилей, нужен напарник.</p>
          </div>
          <div className="user-comment">
            <h3>Такуми Фудживара</h3>
          </div>
        </div>
        <div className="comment__container--card">
          <div className="comment">
            <h3>Я озвучиваю аниме, набираю команду!</h3>
            <p>
              Хочу стать круче студийной банды, нужны люди в команду. У нас есть
              печеньки!
            </p>
          </div>
          <div className="user-comment">
            <h3>Ани Хизар</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
