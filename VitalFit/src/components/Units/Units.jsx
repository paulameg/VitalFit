import './Units.css'


const Units = () => {
  return (
    <div className='units'>
        <h1 className='title'>Unidades</h1>
        <div className='units-cards'>
            <div className='ucard unit-one'>
                    <div className='address'>
                        <p className='street'>Av. Paulista, 123</p>
                        <p className='city'>São Paulo - SP</p>
                    </div>
            </div>
            <div className='ucard unit-two'>
                    <div className='address'>
                        <p className='street'>Rua Oscar Freire, 1234</p>
                        <p className='city'>São Paulo - SP</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Units