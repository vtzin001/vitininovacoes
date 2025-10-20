const imgLogo =require('./logo.png');

function Header(){

    return(
<header className='topo'>
    <figure>
      <img src ={imgLogo}/>
    </figure>
 <nav>
  <ul>
    <li><a href='#home'>home</a></li>
    <li><a href='#projetos'>projetos</a></li>
    <li><a href='#servicos'>servicos</a></li>
    <li><a href='#contato'>contato</a></li>
  </ul>
 </nav>
</header>
    )
}

export default Header;