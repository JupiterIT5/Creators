export default function About() {
    return (
        <div className="section__about">
            <h1>Создавайте вещи<br/>вместе!</h1>
            <p>Мы помогаем связывать креаивных личностей.</p>
            <div className="about__search">
                <input type="text" placeholder="Имя или сфера" className="about__search--input"/>
                <button className="about__search--btn">Найти</button>
            </div>
        </div>
    )
}