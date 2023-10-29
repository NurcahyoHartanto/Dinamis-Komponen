import './App.css';
import DinamisComponent from './Dinamis Komponen/DinamisComponent';
import LogoReact from './Dinamis Komponen/Aset/LogoReact.png'
import Nextjs from './Dinamis Komponen/Aset/Nextjs.png'
import Redux from './Dinamis Komponen/Aset/Redux.png'

function App() {
  return (
    <div className="App">
        <DinamisComponent img={LogoReact} nama="React js" desc="library javascript populer buatan facebook"/>
        <DinamisComponent img={Nextjs} nama="Next js" desc=" framework open-source untuk membuat aplikasi web"/>
        <DinamisComponent img={Redux} nama="Redux" desc="salah satu library yang biasanya digunakan bersama react js"/>
    </div>
  );
}

export default App;
