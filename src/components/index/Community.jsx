import community_01 from "../../img/сommunity01.png";
import community_02 from "../../img/community02.png";

export default function Community() {
  return (
    <div className="community__container">
      <div className="community__title">
        <h2>Сообщество</h2>
        <p>Вступай в клуб единомышленников</p>
      </div>
      <div className="community__img">
        <img src={community_01} alt="photo1" />
        <img src={community_02} alt="photo2" />
      </div>
    </div>
  );
}
