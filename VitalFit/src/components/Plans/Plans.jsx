import './Plans.css'

const Plans = () => {
  return (
    <div id='plans' className='plans'>
        <h1 className='title'>Nossos planos</h1>
        <div className='plans-cards'>
            <div className='green-card'>
                <div className='card-title'>
                    <h2 className='plan'>Plano Green</h2>
                    <h3 className='price'>R$ 119,30</h3>
                    <small className='month-text'>mensais</small>
                </div>
                
                <small className='benefits'>
                    - Direito a 1 amigo por mês para treinar<br/>
                    - Taxa de matricula<br/>
                    - Acesso a área de musculação
                </small>
            </div> 
            <div className='gold-card'>
                <div className='card-title'>
                    <h1 className='plan'>Plano Gold</h1>
                    <h2 className='price'>R$ 129,30</h2>
                    <p className='month-text'>mensais</p>
                </div>
                
                <p className='benefits'>
                    - Acesso a todas as unidades da VitalFit<br/>
                    - Acesso a todas as modalidades<br/>
                    - Direito a 2 amigos por mês para treinar<br/>
                    - Sem taxa de matricula
                </p>
            </div>
            <div className='pro-gold-card'>
                <div className='card-title'>
                    <h2 className='plan'>Plano Pro Gold</h2>
                    <h3 className='price'>R$ 159,30</h3>
                    <small className='month-text'>mensais</small>
                </div>
                
                <small className='benefits'>
                    - Acesso a todos benefícios do Plano Gold<br/>
                    - Avaliação física<br/>
                    - Ganha um kit da VitalFit<br/>
                    - Direito a 5 amigos por mês para treinar<br/>
                    - Acompanhamento de treino
                </small>
            </div> 
        </div>
    </div>
  )
}

export default Plans