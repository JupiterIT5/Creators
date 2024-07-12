import { Route, Routes } from 'react-router-dom'
import Index from './page/Index'
import Creator from './page/Creator'
import Error from './page/Error'
import User1 from './page/creator/User1'
import ChatUser1 from './page/creator/ChatUser1'
import Forum from './page/Forum'
import Project from './page/Project'
import Contact from './page/Contact'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />}/> 
      <Route path='/creator' element={<Creator />}/>
      <Route path='/forum' element={<Forum />}/>
      <Route path='/project' element={<Project />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/creator/user1' element={<User1 />}/>
      <Route path='/creator/user1/chat' element={<ChatUser1 />}/>
      <Route path='*' element={<Error />}/>
    </Routes>
  )
}
