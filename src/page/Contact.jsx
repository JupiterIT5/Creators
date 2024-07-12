import Header from "../components/Header";
import Contacts from "../components/contact/Contacts";
import '../css/contact.css'

export default function Contact() {
    return (
        <div className="about">
            <Header />
            <main onClick={function() {document.querySelector('.header-menu').classList.remove('active'); document.querySelector('body').style.overflowY = 'scroll'}}>
                 <Contacts />
            </main>
        </div>
    )
}