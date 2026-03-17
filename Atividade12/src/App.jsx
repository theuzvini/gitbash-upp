import './App.css'
import Tela01 from './assets/views/tela1';
import Cardprofile from './assets/components/Cardprofile';
import Cardcompra from './assets/components/Cardcompra';

function App() {

  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand p-3 fs-3" href="">Navbar</a>
        <a className='navbar-brand' href="./assets/views/tela01">Atividade Segunda</a>
        <a className='navbar-brand' href="./assets/views/avatar">Atividade Terça</a>
      </nav>  
      <Tela01 />
    </>
  )
}

export default App
