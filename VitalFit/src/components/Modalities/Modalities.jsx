import './Modalities.css'

const Modalities = () => {
  return (
    <div className='modalities'>
        <h1 className='title'>Nossas modalidades</h1>
        <div className='mod-cards'>
            <div className='card musc-card'>
                <h4>Musculação</h4>
            </div>
            <div className='card muaythai-card'>
                <h4>Muay Thai</h4>
            </div>
            <div className='card fitdance-card'>
                <h4>Fit Dance</h4>
            </div>
        </div>
    </div>
  )
}

export default Modalities