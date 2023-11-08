import './Header.css'
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
   <header>
    <img src={Logo} alt="Logo VitalFit" />
    <ul>
        <li>Home</li>
        <li>Sobre</li>
        <li>Modalidades</li>
        <li>Unidades</li>
        <li>Planos</li>
        <li>Contatos</li>
    </ul>
   </header>
  )
}

export default Header