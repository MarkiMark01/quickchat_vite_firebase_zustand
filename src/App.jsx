
import './App.css'
import List from './components/list/List';
import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';

function App() {


  return (
    <>
      <main className='container'>
       <List/>
       <Chat/>
       <Detail/>
      </main>
    </>
  )
}

export default App
