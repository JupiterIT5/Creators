import Header from '../components/Header'
import About from '../components/creator/About';
import Interesting from '../components/creator/Interesting';
import '../css/creator.css'

export default function Creator() {
    return (
        <div className="creator">
            <Header />
            <main onClick={function() {document.querySelector('.header-menu').classList.remove('active'); document.querySelector('body').style.overflowY = 'scroll'}}>
                <About />
                <Interesting />
            </main>
        </div>
    )
}