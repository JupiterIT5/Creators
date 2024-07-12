import education1 from '../../img/education/education1.png'
import education2 from '../../img/education/education2.png'
import education3 from '../../img/education/education3.png'

export default function Education() {
  return (
    <div className="educatuion__container">
      <h2>Обучение</h2>
      <div className="education__container--card">
        <div className="education--card">
          <img src={education1} alt="education1" />
          <h3>Suspendisse vitae egestas Et morbi tellus nibh at enim Leo convallis sed</h3>
          <p>article<span>Marth 19, 2024</span></p>
        </div>
        <div className="education--card">
          <img src={education2} alt="education2" />
          <h3>Tellus lectus ac tristique Consectetur non</h3>
          <p>article<span>January 22, 2024</span></p>
        </div>
        <div className="education--card">
          <img src={education3} alt="education3" />
          <h3>Massa adipicing fames</h3>
          <p>article<span>January 22, 2024</span></p>
        </div>
      </div>
    </div>
  );
}
