import user1 from '../../img/user/user1.png'
import user2 from '../../img/user/user2.png'
import user3 from '../../img/user/user3.png'
import user4 from '../../img/user/user4.png'
import user5 from '../../img/user/user5.png'
import user6 from '../../img/user/user6.png'
import user7 from '../../img/user/user7.png'

export default function () {
  return (
    <div className="about">
      <div className="about-title">
        <h2>Креаторы</h2>
        <p>
          Список крутых исполнителей из самых разных сфер
          <br />
          Чтобы добиться такой популярности, они работали и днём и ночью
          <br />
          Свяжись с ними!
        </p>
      </div>
      <div className="create_human--container">
        <a href="#">
          <div className="human-card">
            <img src={user1} alt="user1" />
            <h2>
              Мансур
              <br />
              Корнукаев
            </h2>
          </div>
        </a>
        <a href="#">
          <div className="human-card">
          <img src={user2} alt="user2" />
            <h2>
              Мадина
              <br />
              Дениева
            </h2>
          </div>
        </a>
        <a href="#">
          <div className="human-card">
          <img src={user3} alt="user3" />
            <h2>
              Майкл
              <br />
              Нохчо
            </h2>
          </div>
        </a>
        <a href="#">
          <div className="human-card">
          <img src={user4} alt="user4" />
            <h2>
              Аббаз
              <br />
              Довлектукаев
            </h2>
          </div>
        </a>
        <a href="#">
          <div className="human-card">
          <img src={user5} alt="user5" />
            <h2>
              Ильяс
              <br />
              Чабаев
            </h2>
          </div>
        </a>
        <a href="#">
          <div className="human-card">
          <img src={user6} alt="user6" />
            <h2>
              Мустафа
              <br />
              Хархоев
            </h2>
          </div>
        </a>
        <a href="#">
          <div className="human-card">
          <img src={user7} alt="user7" />
            <h2>
              Абдулла
              <br />
              Вайнехов
            </h2>
          </div>
        </a>
      </div>
    </div>
  );
}
