export default function Contacts() {
    return (
        <div className="contact__container">
            <h2>Контакты</h2>
            <p>+7 930 000 700 1</p>
            <p>contact@connectcreators.com</p>
            <p>connectcreators.com</p>
            <h2>Мы в социальных сетях</h2>
            <div className="social-network__container">
                <div className="social-network telegram">Telegram</div>
                <div className="social-network instagram">Instagram</div>
                <div className="social-network twitter">Twitter / X</div>
                <div className="social-network linkedIn">LinkedIn</div>
            </div>
        </div>
    )
}