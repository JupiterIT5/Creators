import project1 from "../../img/project/project1.png";
import project2 from "../../img/project/project2.png";
import project3 from "../../img/project/project3.png";
import project4 from "../../img/project/project4.png";
import project5 from "../../img/project/project5.png";
import project6 from "../../img/project/project6.png";
import project7 from "../../img/project/project7.png";
import project8 from "../../img/project/project8.png";
import "../../css/project.css";

export default function Projects() {
  return (
    <div className="projects__container">
      <h2>Найдите интересные проекты</h2>
      <div className="projects__container--card">
        <a href="#">
          <div className="projects--card">
            <img src={project1} alt="project1" />
            <h2>Sherry Abbott</h2>
            <p>Pricipal Factors Manager</p>
          </div>
        </a>
        <a href="#">
          <div className="projects--card">
            <img src={project2} alt="project2" />
            <h2>Phillip Wintheiser</h2>
            <p>Corporate Data Executive</p>
          </div>
        </a>
        <a href="#">
          <div className="projects--card">
            <img src={project3} alt="project3" />
            <h2>Jill Strosin</h2>
            <p>Global Usability Technicial</p>
          </div>
        </a>
        <a href="#">
          <div className="projects--card">
            <img src={project4} alt="project4" />
            <h2>Al Wunsch</h2>
            <p>International Research Representative</p>
          </div>
        </a>
        <a href="#">
          <div className="projects--card">
            <img src={project5} alt="project5" />
            <h2>Kelli D`Amore</h2>
            <p>Principal Program Architec</p>
          </div>
        </a>
        <a href="#">
          <div className="projects--card">
            <img src={project6} alt="project6" />
            <h2>Lorenzo Dickinson</h2>
            <p>Internetional Usabillity Assoclate</p>
          </div>
        </a>
        <a href="#">
          <div className="projects--card">
            <img src={project7} alt="project7" />
            <h2>Clark Ritchie</h2>
            <p>Brand Identity Desinger</p>
          </div>
        </a>
        <a href="#">
          <div className="projects--card">
            <img src={project8} alt="project8" />
            <h2>Shirley Treutel</h2>
            <p>Future Usabillity Desinger</p>
          </div>
        </a>
      </div>
      <button>Загрузить ещё</button>
    </div>
  );
}
