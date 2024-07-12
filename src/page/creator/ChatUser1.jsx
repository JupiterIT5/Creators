import Header from '../../components/Header'
import Chat from '../../components/creator/user1/Chat';
import '../../css/chat.css'

export default function ChatUser1() {
    return (
        <div className="about">
            <Header />
            <main onClick={function() {document.querySelector('.header-menu').classList.remove('active'); document.querySelector('body').style.overflowY = 'scroll'}}>
                <Chat />
            </main>
        </div>
    )
}