import './Contact.css'

import facebook from '../../assets/Facebook.svg'
import instagram from '../../assets/Instagram.svg'
import twitter from '../../assets/Twitter.svg'


const Contact = () => {
  return (
    <div className='contact'>

      <h1 className='title'>Contato</h1>

      <div className='unit-content'>
        <div className='info-units'>

          <div className='unit-1'>
            <h4 className='unit-name'>Unidade 1</h4>
            <p className='unit-address'>Av. Paulista, 123 - São Paulo, SP</p>
            <p className='unit-phone'>Telefone: (11) 12345-1234</p>
          </div>
          <div className='unit-2'>
            <h4 className='unit-name'>Unidade 2</h4>
            <p className='unit-address'>Rua Oscar Freire, 1234 - São Paulo, SP</p>
            <p className='unit-phone'>Telefone: (11) 98765-4321</p>
          </div>
        </div>

        <div className='socialMd-icons'>
            <img className='img-facebook' src={facebook} alt="" />
            <img className='img-instagram' src={instagram} alt="" />
            <img className='img-twitter' src={twitter} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Contact