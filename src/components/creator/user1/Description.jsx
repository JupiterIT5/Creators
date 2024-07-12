import project1 from '../../../img/subtitle/user1/project1.png'
import project2 from '../../../img/subtitle/user1/project2.png'
import friend1 from '../../../img/subtitle/user1/friend1.png'
import friend2 from '../../../img/subtitle/user1/friend2.png'

export default function Description() {
  return (
    <div className="description__container">
      <div className="description__project">
        <h2>Проекты</h2>
        <div className="project">
          <div className="project1">
            <img src={project1} alt="project1" />
            <h2>Imperdient</h2>
          </div>
          <div className="project2">
            <img src={project2} alt="project2" />
            <h2>Nulla</h2>
          </div>
        </div>
      </div>
      <div className="description__friends">
        <h2>Друзья</h2>
        <div className="friend">
          <div className="friend1">
            <img src={friend1} alt="friends1" />
            <h2>
              Мансур
              <br />
              Корнукаев
            </h2>
          </div>
          <div className="friend2">
            <img src={friend2} alt="friend2" />
            <h2>
              Мадина
              <br />
              Дениева
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
