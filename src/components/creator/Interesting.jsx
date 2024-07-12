import interesting1 from "../../img/interestion/user1.png";
import interesting2 from "../../img/interestion/user2.png";
import interesting3 from "../../img/interestion/user3.png";
import interesting4 from "../../img/interestion/user4.png";
import interesting5 from "../../img/interestion/user5.png";
import interesting6 from "../../img/interestion/user6.png";
import interesting7 from "../../img/interestion/user7.png";
import interesting8 from "../../img/interestion/user8.png";

export default function Interesting() {
  return (
    <div className="interesting__container">
      <h2>Возможно вы заинтересовались</h2>
      <div className="interesting__container--card">
        <a href="/creator/user1">
          <div className="interesting--card">
            <img src={interesting1} alt="interesting1" />
            <h2>Sherry Abbott</h2>
            <p>Pricipal Factors Manager</p>
          </div>
        </a>
        <a href="#">
          <div className="interesting--card">
            <img src={interesting2} alt="interesting2" />
            <h2>Phillip Wintheiser</h2>
            <p>Corporate Data Executive</p>
          </div>
        </a>
        <a href="#">
          <div className="interesting--card">
            <img src={interesting3} alt="interesting3" />
            <h2>Jill Strosin</h2>
            <p>Global Usability Technicial</p>
          </div>
        </a>
        <a href="#">
          <div className="interesting--card">
            <img src={interesting4} alt="interesting4" />
            <h2>Al Wunsch</h2>
            <p>International Research Representative</p>
          </div>
        </a>
        <a href="#">
          <div className="interesting--card">
            <img src={interesting5} alt="interesting5" />
            <h2>Kelli D`Amore</h2>
            <p>Principal Program Architec</p>
          </div>
        </a>
        <a href="#">
          <div className="interesting--card">
            <img src={interesting6} alt="interesting6" />
            <h2>Lorenzo Dickinson</h2>
            <p>Internetional Usabillity Assoclate</p>
          </div>
        </a>
        <a href="#">
          <div className="interesting--card">
            <img src={interesting7} alt="interesting7" />
            <h2>Clark Ritchie</h2>
            <p>Brand Identity Desinger</p>
          </div>
        </a>
        <a href="#">
          <div className="interesting--card">
            <img src={interesting8} alt="interesting8" />
            <h2>Shirley Treutel</h2>
            <p>Future Usabillity Desinger</p>
          </div>
        </a>
        <button>Загрузить ещё</button>
      </div>
    </div>
  );
}
