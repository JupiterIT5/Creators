import menu from "../icon/index/btn-menu.png";
import user from "../icon/index/user.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <img src={menu} alt="menu" className="menu" id="menu" onClick={function() {document.querySelector('.header-menu').classList.add('active'); document.querySelector('body').style.overflow = 'hidden'}}/>
        <h2>
          <span>c</span>onnect<span>c</span>reators
        </h2>
        <img src={user} alt="user" className="user" />
      </div>
      <div className="header-menu">
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/creator">Креаторы</a>
          </li>
          <li>
            <a href="/forum">Форум</a>
          </li>
          <li>
            <a href="/project">Проекты</a>
          </li>
          <li>
            <a href="#">Ресурсы</a>
          </li>
          <li>
            <a href="#">Обучение</a>
          </li>
          <li>
            <a href="/contact">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
