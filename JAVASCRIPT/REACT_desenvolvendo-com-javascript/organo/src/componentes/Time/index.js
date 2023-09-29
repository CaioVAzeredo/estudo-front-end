import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        //operador ternario para mostrar ou nao quando tiver adicionado um elemento na array de colaboradores
        props.colaboradores.length > 0 ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3
                style={{ borderColor: props.corPrimaria }}>{props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return <Colaborador
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem} 
                        soDeleter = {props.aoDeletar}/>

                })}
            </div>

        </section> : ''
    )
}

export default Time