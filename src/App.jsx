import logo from './logo.svg';
import './App.css';

import Header from "./components/Header/Header";
import Secao2 from './components/Secao2/Secao2';
import Secao3 from './components/Secao3/Secao3';
import Secao4 from './components/Secao4/Secao4';
import Secao5 from './components/Secao5/Secao5';
import Secao6 from './components/Secao6/Secao6';
import Secao7 from './components/Secao7/Secao7';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <Secao2/>
    <Secao3/>
    <Secao4/>
    <Secao5/>
    <Secao6/>
    <Secao7/>
    <Footer/>
    </div>
  );
}

export default App;
