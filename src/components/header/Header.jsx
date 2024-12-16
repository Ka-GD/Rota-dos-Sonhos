import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from '../../pages/inicio/Inicio.jsx';
import Galeria from '../../pages/galeria/Galeria.jsx';
import Mapa from '../../pages/mapa/Mapa.jsx';
import Cultura from '../../pages/cultura/Cultura.jsx';

import s from './header.module.scss';
// imagens do site


export default function Header() {
  return (
    <BrowserRouter>
      <header className={s.Header}>
        <h2> Rota dos Sonhos</h2>
        <nav>
          
          <ul>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='/Galeria'>Galeria</Link>
            </li>
            <li>
              <Link to='/Mapa'>Mapa</Link>
            </li>
            <li>
              <Link to='/Cultura'>Cultura</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>  {/* Corrigido de 'Rautes' para 'Routes' */}
        <Route path='/' element={<Inicio />} />
        <Route path='/Galeria' element={<Galeria />} />
        <Route path='/Mapa' element={<Mapa />} />
        <Route path='/Cultura' element={<Cultura />} />
      </Routes>
    </BrowserRouter>
  );

}
