import Header from "../../components/Header";
import Description from "../../components/creator/user1/Description";
import Subtitle from "../../components/creator/user1/Subtitle";

export default function User1() {
    return (
        <div className="about">
            <Header />
            <main onClick={function() {document.querySelector('.header-menu').classList.remove('active'); document.querySelector('body').style.overflowY = 'scroll'}}>
                <Subtitle />
                <Description />
            </main>
        </div>
    )
}