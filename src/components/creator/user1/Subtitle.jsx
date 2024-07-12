import user1 from "../../../img/interestion/user1.png";
import star from "../../../icon/star.png";
import "../../../css/user.css";

export default function Subtitle() {
  return (
    <div className="subtitle__container">
      <h2>Sherry Abbott</h2>
      <div className="subtitle__container--card">
        <img src={user1} alt="user1" />
        <div className="subtitle--text">
          <h2>Pricipal Factors Manager</h2>
          <h2>34 y.o.</h2>
          <h2>New York</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, ea culpa? Sed veniam omnis laudantium alias, id quis
            ullam eaque rerum nisi dolores. Iusto minima obcaecati nemo
            blanditiis aut maiores.
          </p>
          <div className="subtitle--text--chat">
            <a href="/creator/user1/chat">
              <button>Написать</button>
            </a>
            <div className="subtitle--text--chat--star">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
