const imgInstagram = require('./logo.png');
const imgFacebook =require('./logo.png');
const imgLinKedin =require ('./logo.png');

function Footer(){

    return(
        <footer>
  <nav className='menufooter'>
    <ul>
    <li><a href='#projetos'>Projetos</a></li>
    <li><a href='#servoços'>Serviços</a></li>
    <li><a href='#contato'>Contatos</a></li>
    </ul>
  </nav>

  <div className='direitps'>
      Desenvolvido por Victor Brunett dos Santos - 2025
  </div>

  <div className='redesSociais'>
    <div><img src = {imgInstagram} className='imgRedesSociais'/></div>  
    <div><img src = {imgInstagram} className='imgRedesSociais'/></div>  
    <div><img src = {imgInstagram} className='imgRedesSociais'/></div>  
    <div><img src = {imgInstagram} className='imgRedesSociais'/></div>  
  </div>
</footer>
    )
}