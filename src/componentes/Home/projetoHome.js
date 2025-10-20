import { useEffect, useState } from 'react';
import projetosBase from '../../data/projetos';

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
            </article>
              );
            })
        }
        </div>
        );
}