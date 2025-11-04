import Home from './componentes/Home';
import Header from './componentes/Header';
import Footer from './componentes/Footer';


import Projetos from './componentes/Projetos';
import Servicos from './componentes/servicos';
import Contato from './componentes/Contato';
import DetalhesServico from './componentes/servicos/DetalhesServico.js';

import { BrowserRouter, Router, Route } from 'react-router-dom';

const projetos = require('./data/projetos.js');

function App() {
  return (
    <> 
       <BrowserRouter>
    <Header/>
      <Router>
        <Router path='/' element={<Home />} />
        <Router path='/projetos' element={<Projetos />} />
        <Router path='/servicos' element={<Servicos />} />
        <Router path='/contato' element={<Contato />} />
      </Router>

  <Home/>
<Footer/>
</BrowserRouter>
</>
  );
}

export default App;