import Header from '../components/Header'
import About from '../components/index/About'
import Community from '../components/index/Community'
import Create from '../components/index/Create'
import Education from '../components/index/Education'
import Forum from '../components/index/Forum'
import Project from '../components/index/Project'
import Footer from '../components/Footer'
import '../css/index.css'
import '../css/header.css'

export default function Index() {
    return (
        <div className='about'>
            <Header />
            <main onClick={function() {document.querySelector('.header-menu').classList.remove('active'); document.querySelector('body').style.overflowY = 'scroll'}}>
                <About />
                <Create />
                <Forum />
                <Project />
                <Education />
                <Community />
            </main>
            <Footer />
        </div>
    )
}