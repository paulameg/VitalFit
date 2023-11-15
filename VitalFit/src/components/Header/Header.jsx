import './Header.css'
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
   <header>
    <img className='logo-img' src={Logo} alt="Logo VitalFit" />
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#modalities">Modalidades</a></li>
        <li><a href="#unit">Unidades</a></li>
        <li><a href="#plans">Planos</a></li>
        <li><a href="#contacts">Contatos</a></li> 
    </ul>
   </header>
  )
}

export default Header