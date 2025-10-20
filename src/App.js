import './App.css';
import Home from './componentes/Home/index.js';
import Header from './componentes/Header/index.js';
import Footer from './componentes/Footer/index.js';

import Projetos from './componentes/Projetos.js';
import Servicos from './componentes/Servicos';
import Contato from './componentes/Contatos.js';

import { BrowserRouter, Router, Route } from 'react-router-dom';

const projetos = require('./data/projetos.js');

function App() {
  return (
    <> 
    <Header></Header>
    <BrowserRouter>
      <Router>
        <Router path='/' element={<Home />} />
        <Router path='/projetos' element={<Projetos />} />
        <Router path='/servicos' element={<Servicos />} />
        <Router path='/contato' element={<Contato />} />
      </Router>
    </BrowserRouter>
  <Home/>
<Footer/>
</>
  );
}

export default App;