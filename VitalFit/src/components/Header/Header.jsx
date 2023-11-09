import './Header.css'
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
   <header>
    <img src={Logo} alt="Logo VitalFit" />
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Sobre</a></li>
        <li><a href="">Modalidades</a></li>
        <li><a href="">Unidades</a></li>
        <li><a href="">Planos</a></li>
        <li><a href="">Contatos</a></li> 
    </ul>
   </header>
  )
}

export default Header