import project1 from "../../img/project/project1.png";
import project2 from "../../img/project/project2.png";
import project3 from "../../img/project/project3.png";
import project4 from "../../img/project/project4.png";
import project5 from "../../img/project/project5.png";

export default function Project() {
  return (
    <div className="project__container">
      <h2>Проекты</h2>
      <div className="project__container--card">
        <div className="project--card">
          <img src={project1} alt="project1" />
          <h2>Галерея грозного</h2>
          <p>Маира Докуева</p>
        </div>
        <div className="project--card">
          <img src={project2} alt="project2" />
          <h2>Винициан</h2>
          <p>Майрбек Хариев</p>
        </div>
        <div className="project--card">
          <img src={project3} alt="project3" />
          <h2>Облака света</h2>
          <p>Мака Асхабова</p>
        </div>
        <div className="project--card">
          <img src={project4} alt="project4" />
          <h2>Игра теней</h2>
          <p>Ибрагим Шариев</p>
        </div>
        <div className="project--card">
          <img src={project5} alt="project5" />
          <h2>Красочный залив</h2>
          <p>Амалия Данаева</p>
        </div>
        <div className="project--card">
          <h3>Посмотреть ещё</h3>
        </div>
      </div>
    </div>
  );
}
