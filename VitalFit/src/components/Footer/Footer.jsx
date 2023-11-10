import './Footer.css'

import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer>
        <img src={logo} alt="" />
        <p className='copy'>© 2023 VitalFit Sport Club</p>
    </footer>
  )
}

export default Footer