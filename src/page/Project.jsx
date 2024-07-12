import Header from "../components/Header";
import About from "../components/project/About";
import Projects from "../components/project/Projects";

export default function Project() {
    return (
        <div className="about">
            <Header />
            <main onClick={function() {document.querySelector('.header-menu').classList.remove('active'); document.querySelector('body').style.overflowY = 'scroll'}}>
                <About />
                <Projects />
            </main>
        </div>
    )
}