import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import projetosBase from '../../data/projetos';
const imgLogo = require('.../logo.png');

export default function ProjetosHome(){
    const [projetos, setProjetos] = useState([]);
    setProjetos (projetosBase)
   
    useEffect(() => {
        setProjetos(projetosBase);
    }, []);
   return(
        <div>
        {
        projetos.map((item, index) => {
            return(
            <article key={index}>
                <img src={imglogo}/>
                <h2>{item.titulo}</h2>
                <p>{item.resumo}</p>
                <Link href="#">Ver detalhes</Link>
            </article>
              );
            })
        }
        <a href="#">Ver mais projeto</a>
        </div>
    );
}