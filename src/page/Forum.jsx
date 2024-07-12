import Header from "../components/Header";
import About from "../components/forum/About";
import Message from "../components/forum/Message";

export default function Forum() {
    return (
        <div className="about">
            <Header />
            <main onClick={function() {document.querySelector('.header-menu').classList.remove('active'); document.querySelector('body').style.overflowY = 'scroll'}}>
                <About />
                <Message />
            </main>
        </div>
    )
}